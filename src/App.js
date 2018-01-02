import React, { Component } from 'react';
import HelloWorld, { ComponentWillMount, ComponentDidMount } from './components';
import logo from './logo.svg';
import './App.css';




/**
 * App main class diplays Hello World
 * @extends Component
 */
class App extends Component {
  /**
   * render function to render html Component to
   *      reactVirtualDom
   * @return {[ReactElement(div)]} [Div element]
   */
  render() {
    return (
      <div className="App">
        <HelloWorld name="Tony" />
        <ComponentWillMount />
        <ComponentDidMount />
      </div>
    );
  }
}

export default App;
