import React from 'react';
import PropTypes from 'prop-types';

const DropTarget = ({ dropped }) => (
  <div className="drop-target">
    <button
      type="button"
      onClick={dropped}
    >
      [DROP ZONE FOR CONTENT]
    </button>
  </div>
);

DropTarget.propTypes = {
  dropped: PropTypes.func.isRequired,
};

// DropTarget.defaultProps = {
// };

export default DropTarget;
