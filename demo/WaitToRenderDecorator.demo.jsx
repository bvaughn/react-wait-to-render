import React, { Component } from 'react'
import DemoComponent from './DemoComponent.jsx'
import DemoDecoratedComponent from './DemoDecoratedComponent.jsx'
import DemoDecoratedComponentCustomLoader from './DemoDecoratedComponent.CustomLoader.jsx'
import Highlighter from './Highlighter.jsx'
import WaitToRenderDecorator from '../source/WaitToRenderDecorator.jsx'

export default class WaitToRenderDecoratorDemo extends Component {
  render () {
    return (
      <div {...this.props}>
        <h2>WaitToRenderDecorator</h2>
        <p>
          The <code>WaitToRenderDecorator</code> wrapper component can be used to defer loading of vanilla React components.
          If a component requires at least one property, the <code>WaitToRenderDecorator</code> wrapper will wait to render it until that property has been defined.
          Let's say we have a component that requires a <code>name</code> property string.
        </p>
        <Highlighter language='html'>
          {`<WaitToRenderDecorator wrappedComponent={DemoComponent} name={undefined} />`}
        </Highlighter>
        <p>
          If we were to wrap that component and pass it a value of <code>undefined</code> (as shown above) we would see this:
        </p>
        <WaitToRenderDecorator wrappedComponent={DemoComponent} name={undefined} />
        <Highlighter language='html'>
          {`<WaitToRenderDecorator wrappedComponent={DemoComponent} name='Brian' />`}
        </Highlighter>
        <p>
          If we were to pass a truthy value (as shown above) then the actual component would be rendered:
        </p>

        <WaitToRenderDecorator wrappedComponent={DemoComponent} name='Brian' />
        <h2>WaitToRenderDecorator</h2>
        <p>
          The above syntax can get a little clunky though.
          It also requires consumers of a component to care about whether that component should defer its rendering.
          For this reason a <code>WaitToRenderDecorator</code> has been created as well.
          To use it just decorate your React component class like so:
        </p>
        <Highlighter language='javascript'>
          {`@WaitToRenderDecorator
class DemoDecoratedComponent extends Component {
  // Your class goes here...
}`}
        </Highlighter>
        <p>
          Now we get the same benefit of the <code>WaitToRenderDecorator</code> but cleaner syntax:
        </p>
        <Highlighter language='html'>
          {`<DemoDecoratedComponent name='Brian' />`}
        </Highlighter>
        <DemoDecoratedComponent name='Brian' />

        <p>
          Loading indicators for both the <code>WaitToRenderDecorator</code> wrapper and the <code>WaitToRenderDecorator</code> can be customized.
          The simplest way of doing this is to specify a custom style for the <code>.LoadingIndicator</code> class like so:
        </p>
        <Highlighter language='css'>
          {`.LoadingIndicator {
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #777;
  color: #DDD;
  font-style: italic;
}`}
        </Highlighter>
        <p>
          For even greater controler though you can specify your own loading component as an argument to the wrapper:
        </p>
        <Highlighter language='html'>
          {`<WaitToRenderDecorator
  wrappedComponent={DemoComponent}
  loadingIndicator={customLoadingComponent}
  name={undefined} />`}
        </Highlighter>
        <WaitToRenderDecorator
          wrappedComponent={DemoComponent}
          loadingIndicator={<div className='CustomLoadingIndicator'>Custom loading component...</div>}
          name={undefined} />
        <p>
          Or the decorator:
        </p>
        <Highlighter language='javascript'>
          {`@WaitToRenderDecorator
export default class DemoDecoratedComponent extends Component {
  static loadingIndicator = <CustomLoadingComponent />

  // Your class goes here...
}`}
        </Highlighter>
        <DemoDecoratedComponentCustomLoader name={undefined} />
      </div>
    )
  }
}
