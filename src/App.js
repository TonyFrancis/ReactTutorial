import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



/**
 * [styles style folr the Component]
 * @type {Object}
 */
const styles = {
  hello: {
    fontSize: 32,
    // in react font-size => fontSize
    // all foo-bar become fooBar
    // eg background-color => backgroundColor ....
  },
};
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
        <p style={styles.hello}>hello World</p>
      </div>
    );
  }
}

export default App;
