import React, { Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Shows ComponentWillMount workflow.
 * @extends Component
 */
class ShouldComponentUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    }
  }
  /**
   * performance optimise by updating dom or not based on conditions
   * @param  {object} nextProps changes to props
   * @param  {object} nextState changes to state
   * @return {boolean} if true executes render function else does not do anything
   */
  shouldComponentUpdate(nextProps, nextState) {
    // if true component render else it does not
    return nextState.counter > 4
  }
  render () {
    return (<div>
      Counter will only render after counter greater than 4
      <br />
        Counter: {this.state.counter}
      <br />
      <button
        onClick={() => {
          this.setState((prevState) => {
            return {
              counter: prevState.counter + 1
            }
          })}}>
      Click to Update counter
      </button>
    </div>)
  }
}

export default ShouldComponentUpdate;
