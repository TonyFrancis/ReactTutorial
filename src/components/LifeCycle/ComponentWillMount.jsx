import React, { Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Shows ComponentWillMount workflow.
 * @extends Component
 */
class ComponentWillMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentWillMount: 'Not mounted',
    }
  }
  /**
   * Will execute this function before mounting function.
   */
  componentWillMount() {
    let that = this;
    setTimeout(() => {
      that.setState({ componentWillMount: 'Mounted'})
    }, 3000);
  }
  render () {
    return (<div>
      {this.state.componentWillMount}
    </div>)
  }
}

export default ComponentWillMount;
