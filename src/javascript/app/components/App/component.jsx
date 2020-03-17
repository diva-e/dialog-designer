import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => (
  <>
    <button
      type="button"
      onClick={props.toggleExample}
    >
      { props.example ? 'true' : 'false' }
    </button>
  </>
);

App.propTypes = {
  example: PropTypes.bool.isRequired,
  toggleExample: PropTypes.func.isRequired,
};

App.defaultProps = {
};

export default App;
