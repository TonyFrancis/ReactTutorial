import React, { Component } from 'react';
import HelloWorld from './components';
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
      </div>
    );
  }
}

export default App;
