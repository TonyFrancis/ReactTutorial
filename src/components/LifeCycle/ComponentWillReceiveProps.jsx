import React, { Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Shows ComponentWillReceiveProps workflow.
 * @extends Component
 */
class ComponentWillReceiveProps extends Component {
  constructor(props) {
    super(props);
    const { componentWillReceiveProps } = props;
    this.state = {
      componentWillReceiveProps
    }
  }
  /**
   * when props change this function is executed
   * @param  {object} nextProps changes to props
   */
  componentWillReceiveProps(nextProps) {
    const { componentWillReceiveProps } = nextProps;
    console.log("Update the props")
    this.setState({ componentWillReceiveProps })
  }
  render () {
    return (<div>
      {this.state.componentWillReceiveProps}
    </div>)
  }
}

export default ComponentWillReceiveProps;
