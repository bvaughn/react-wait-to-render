import React, { Component, PropTypes } from 'react'

export default class DemoComponent extends Component {
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
