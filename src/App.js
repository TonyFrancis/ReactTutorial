import React, { Component } from 'react';
import HelloWorld, {
  ComponentWillUpdate,
  ComponentWillReceiveProps,
  ShouldComponentUpdate,
  ComponentDidUpdate,
  ComponentDidCatch,
 } from './components';
import logo from './logo.svg';
import './App.css';

/**
 * BuggyCounter will throw error when counter reach 5
 * @extends React
 */
class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}
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
      <ComponentDidCatch>
        <BuggyCounter />
      </ComponentDidCatch>
    );
  }
}

export default App;
