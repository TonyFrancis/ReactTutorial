import React, { Component } from 'react'
import PropTypes from 'prop-types'
/**
 * Explains componentDidMount and componentWillMount life cycle.
 * @extends Component
 */
class ComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  /**
   * called after object is mounted.
   * used for library intergration like jquery, charts etc
   */
  componentDidMount() {
    setTimeout( () => {
      this.div.innerHTML = "Something Added"
    }, 3000)

  }
  /**
   * destructor remove all reference varible called before object is removed from DOM
   */
  componentWillUnmount() {
    this.div = null;
  }
  render () {
    return (
      <div ref={(div) => this.div = div}>
         Nothing here
      </div>
    )
  }
}

export default ComponentDidMount;
