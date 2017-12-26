import React, { Component } from 'react';
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
        <p>hello World</p>
      </div>
    );
  }
}

export default App;
