import React, { Component} from 'react';
import PropTypes from 'prop-types';

class ComponentDidCatch extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  /**
   * default error catching bounder for error propagation.
   * @param  {Error} error error object
   * @param  {string} info  desprication
   */
  componentDidCatch(error, info) {
    // Display fallback UI
    console.log("ComponentDidCatch")
    this.setState({ hasError: true });
    console.error(error, info)
    // You can also log the error to an error reporting service
    // console.error(error, info);
  }

  render() {
    console.log(this.state)
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ComponentDidCatch;
