import React from 'react';
import PropTypes from 'prop-types';

const DropTarget = ({ dropped, accepts }) => (
  <div className="drop-target">
    <button
      type="button"
      onClick={dropped}
    >
      {`[DROP-ZONE | Accepts: ${accepts.join(', ')}]`}
    </button>
  </div>
);

DropTarget.propTypes = {
  dropped: PropTypes.func.isRequired,
};

export default DropTarget;
