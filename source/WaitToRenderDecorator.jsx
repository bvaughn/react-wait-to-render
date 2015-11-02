import React, { Component } from 'react'
import shouldPureComponentUpdate from 'react-pure-render/function'
import DefaultLoadingIndicator from './LoadingIndicator.jsx'
import haveAllPropertiesLoaded from './haveAllPropertiesLoaded'

/**
 * Decorates a component class so that instances of it will display a loading indicator until dependencies have pre-loaded.
 * See <WaitToRender> documentation for more information on how the decorated component works.
 */
export default function WaitToRenderDecorator (WrappedComponent) {
  const componentDisplayName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

  return class DecoratedWaitToRenderDecorator extends Component {
    shouldComponentUpdate = shouldPureComponentUpdate

    // Used by React devtools when generating DOM tree
    static displayName = `Decorated(${componentDisplayName})`

    // Expose decorated class for testing convenience
    static WrappedComponent = WrappedComponent

    render () {
      const { isVisible } = this.props

      const LoadingIndicator = WrappedComponent.loadingIndicator || <DefaultLoadingIndicator />

      if (isVisible === false) {
        return null
      } else if (!haveAllPropertiesLoaded(this.props)) {
        return LoadingIndicator
      } else {
        return <WrappedComponent {...this.props} />
      }
    }
  }
}
