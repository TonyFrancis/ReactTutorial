import React, { Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Shows ComponentWillMount workflow.
 * @extends Component
 */
class ComponentWillUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentWillUpdate: 'Not Updated',
    }
  }
/**
 * called after state update and new props before rendering
 * @param  {object} nextProps change to props
 * @param  {object} nextState change to state
 */
  componentWillUpdate(nextProps, nextState) {
    /*
      No State change is applied here.
     */
      console.log(nextState)
  }
  render () {
    return (<div onClick={() => {
      this.setState({ componentWillUpdate: 'Updated' })}
    }>
      {this.state.componentWillUpdate}
    </div>)
  }
}

export default ComponentWillUpdate;
