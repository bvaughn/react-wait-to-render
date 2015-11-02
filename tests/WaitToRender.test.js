import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect.js'
import WaitToRender from '../source/WaitToRender.jsx'

describe('WaitToRender', () => {
  var myTestComponentInitialized

  class MyTestComponent extends Component {
    static propTypes = {
      foo: PropTypes.bool.isRequired,
      bar: PropTypes.string.isRequired,
      baz: PropTypes.number.isRequired
    }

    constructor (props) {
      super(props)

      myTestComponentInitialized = true
    }

    render () {
      const { foo, bar, baz } = this.props
      return <div>{foo}-{bar}-{baz}</div>
    }
  }

  beforeEach(() => {
    myTestComponentInitialized = false
  })

  it('should not render a component if any properties are undefined', () => {
    TestUtils.renderIntoDocument(
      <WaitToRender
        wrappedComponent={MyTestComponent}
        foo
        bar={undefined}
        baz={1} />)
    expect(myTestComponentInitialized).to.equal(false)
  })

  it('should pass through all props to rendered page once loading is finished', () => {
    const component = TestUtils.renderIntoDocument(
      <WaitToRender
        wrappedComponent={MyTestComponent}
        foo
        bar={'string'}
        baz={123} />)
    expect(myTestComponentInitialized).to.equal(true)
    expect(component.props.foo).to.equal(true)
    expect(component.props.bar).to.equal('string')
    expect(component.props.baz).to.equal(123)
  })

  it('should accept falsy values as loaded properties', () => {
    const component = TestUtils.renderIntoDocument(
      <WaitToRender
        wrappedComponent={MyTestComponent}
        foo={false}
        bar={''}
        baz={0} />)
    expect(myTestComponentInitialized).to.equal(true)
    expect(component.props.foo).to.equal(false)
    expect(component.props.bar).to.equal('')
    expect(component.props.baz).to.equal(0)
  })

  it('should not render a component if :isLoading is false even if properties are all defined', () => {
    TestUtils.renderIntoDocument(
      <WaitToRender
        wrappedComponent={MyTestComponent}
        isLoading
        foo
        bar={'string'}
        baz={123} />)
    expect(myTestComponentInitialized).to.equal(false)
  })

  it('should render a component even if properties are undefined if :isLoading is false', () => {
    const component = TestUtils.renderIntoDocument(
      <WaitToRender
        wrappedComponent={MyTestComponent}
        isLoading={false}
        foo={undefined}
        bar={undefined}
        baz={undefined} />)
    expect(myTestComponentInitialized).to.equal(true)
    expect(component.props.foo).to.equal(undefined)
    expect(component.props.bar).to.equal(undefined)
    expect(component.props.baz).to.equal(undefined)
  })

  it('should not render a loader if :isVisible is false', () => {
    const component = TestUtils.renderIntoDocument(
      <WaitToRender
        wrappedComponent={MyTestComponent}
        isVisible={false}
        bar={undefined} />)
    expect(component.refs.loadingPage).to.equal(undefined)
  })

  it('should not render the loaded component if :isVisible is false', () => {
    TestUtils.renderIntoDocument(
      <WaitToRender
        wrappedComponent={MyTestComponent}
        isVisible={false}
        bar={123} />)
    expect(myTestComponentInitialized).to.equal(false)
  })

  it('should render the loader if :isVisible is true', () => {
    const component = TestUtils.renderIntoDocument(
      <WaitToRender
        wrappedComponent={MyTestComponent}
        isVisible
        bar={undefined} />)
    expect(findDOMNode(component).className).to.contain('LoadingIndicator')
  })

  it('should render the loaded component if :isVisible is true', () => {
    TestUtils.renderIntoDocument(
      <WaitToRender
        isVisible
        wrappedComponent={MyTestComponent}
        bar={123} />)
    expect(myTestComponentInitialized).to.equal(true)
  })
})
