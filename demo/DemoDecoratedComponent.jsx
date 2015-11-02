import React, { Component, PropTypes } from 'react'
import WaitToRenderDecorator from '../source/WaitToRenderDecorator.jsx'

@WaitToRenderDecorator
export default class DemoDecoratedComponent extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render () {
    const { name } = this.props

    return (
      <div className='DemoComponent'>
        Hi, my name is <strong>{name}</strong>.
      </div>
    )
  }
}
