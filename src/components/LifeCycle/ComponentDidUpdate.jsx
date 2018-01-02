import React, { Component } from 'react'
import PropTypes from 'prop-types'
/**
 * Explains componentDidUpdate and componentWillMount life cycle.
 * @extends Component
 */
class ComponentDidUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false
    }
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
   * called after object updated
   * used for library intergration
   * @param  {object} prevProps changed props
   * @param  {object} prevState changed state
   */
  componentDidUpdate(prevProps, prevState) {
      this.div.innerHTML = "Something Updated"
  }
  /**
   * destructor remove all reference varible called before object is removed from DOM
   */
  componentWillUnmount() {
    this.div = null;
  }
  render () {
    return (
      <div ref={(div) => this.div = div} onClick={() => this.setState({update: true })}>
         Nothing here
      </div>
    )
  }
}

export default ComponentDidUpdate;
