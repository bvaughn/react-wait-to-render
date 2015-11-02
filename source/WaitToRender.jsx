import React, { Component, PropTypes } from 'react'
import shouldPureComponentUpdate from 'react-pure-render/function'
import DefaultLoadingIndicator from './LoadingIndicator.jsx'
import haveAllPropertiesLoaded from './haveAllPropertiesLoaded'

/**
 * Decorates a component and displays a loading indicator until component dependencies have pre-loaded.
 *
 * Components can make use of a special :isLoading property to explicitly control creation.
 * If :isLoading is false the decorated component will not be created (even if all other properties are defined).
 * If :isLoading is true the decorated component will be created (even if all other properties are undefined).
 * If there is no :isLoading property then the component will be created only once all properties are defined.
 *
 * Components can also specify a value for :isVisible to control whether anything (including the loading indicator) is shown.
 * This property can be useful for deferred components such as modal dialogs.
 * A loading graphic should not be shown for such components unless they're actually supposed to be visible.
 *
 * Usage example:
 * <WaitToRenderDecorator
 *   wrappedComponent={SomeComponentClass}
 *   someRequiredProperty={...}
 *   anotherRequiredProperty={...} />
 */
export default class WaitToRenderDecorator extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate

  static propTypes = {
    /** Main React component for page. */
    wrappedComponent: PropTypes.any.isRequired,

    /** Allows finer-grained control over when decorated component is rendered. */
    isLoading: PropTypes.bool,

    /** Allows finer-grained control over when loading indicator or component should be shown. */
    isVisible: PropTypes.bool,

    /** Optional loading indicator (overrides default). */
    loadingIndicator: PropTypes.node.isRequired
  }

  static defaultProps = {
    loadingIndicator: <DefaultLoadingIndicator />
  }

  render () {
    const { isVisible, loadingIndicator } = this.props

    if (isVisible === false) {
      return null
    } else if (!haveAllPropertiesLoaded(this.props)) {
      return loadingIndicator
    } else {
      const {
        wrappedComponent: WrappedComponent,
        ...props
      } = this.props

      return <WrappedComponent {...props} />
    }
  }
}
