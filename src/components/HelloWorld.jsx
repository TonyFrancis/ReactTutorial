import React from 'react';
import PropTypes from 'prop-types';

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
 * [HelloWorld display hello world.
 *  take props]
 * @param {string} name name of the person
 */
const HelloWorld = ({name}) => {
  return (
    <p style={styles.hello}>
      Hello {name}
    </p>
  )
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired, // name is required of string type
};

HelloWorld.defaultProps = {
  name: 'World', // default value for name is given
};
export default HelloWorld ;
