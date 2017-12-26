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
 * [HelloWorld Presetational component
 * ie, dump render only html]
 */
const HelloWorld = () => {
  return (
    <p style={styles.hello}>
      Hello World
    </p>
  )
}
export default HelloWorld ;
