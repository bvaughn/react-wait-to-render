import React, { Component, PropTypes } from 'react'
import WaitToRenderDecorator from '../source/WaitToRenderDecorator.jsx'

@WaitToRenderDecorator
export default class DemoDecoratedComponentWithCustomLoader extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  static loadingIndicator = (
    <div className='CustomLoadingIndicator'>
      Custom loading component...
    </div>
  )

  render () {
    const { name } = this.props

    return (
      <div className='DemoComponent'>
        Hi, my name is <strong>{name}</strong>.
      </div>
    )
  }
}
