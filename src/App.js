import React, { Component } from 'react';
import HelloWorld, {
  ComponentWillUpdate,
  ComponentWillReceiveProps,
  ShouldComponentUpdate,
 } from './components';
import logo from './logo.svg';
import './App.css';




/**
 * App main class diplays Hello World
 * @extends Component
 */
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newProps: "Old Props"
    }
  }
  /**
   * render function to render html Component to
   *      reactVirtualDom
   * @return {[ReactElement(div)]} [Div element]
   */
  render() {
    return (
      <div className="App" onClick={() => this.setState({newProps: "New Props" })}>
        <HelloWorld name="Tony" />
        <ComponentWillUpdate />
        <ComponentWillReceiveProps componentWillReceiveProps={this.state.newProps} />
        <ShouldComponentUpdate />
      </div>
    );
  }
}

export default App;
