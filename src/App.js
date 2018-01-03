import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld';
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
      counter: 1
    }
  }
  /**
   * render function to render html Component to
   *      reactVirtualDom
   * @return {[ReactElement(div)]} [Div element]
   */
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
