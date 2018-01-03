import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * style folr the Component
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
 * HelloWorld react class component to display hello {name}
 *  this.state varible retain memory of the component to be used later.
 * @extends Component
 */
class HelloWorld extends Component {
  /**
   *  init function set inital value for the component
   * @param  {object} props [object with key "name"]
   */
  constructor(props) {
    super(props); // needed ( inheritance )
    /**
     * state hold data about component at any instance
     * @type {Object}
     */
    this.state = {
      name: props.name,
    };
  }
  /**
   *  html part of the component
   * @return {ReactElement(div)} div component to be displayed
   */
  render() {
    const names = [];
    for (let i = 0; i< 10 ; i++) {
      names.push(
        <h4>hello {this.state.name}</h4>
      );
    }
    return (
      <div>
        <input
          value={this.state.name}
          onChange={ e => this.setState({ name: e.target.value})}
          />
        {names}
      </div>
    )
  }
}


HelloWorld.propTypes = {
  name: PropTypes.string.isRequired, // name is required of string type
};

HelloWorld.defaultProps = {
  name: 'World', // default value for name is given
};
export default HelloWorld ;
