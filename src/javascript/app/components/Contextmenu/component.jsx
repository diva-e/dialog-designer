import React from 'react';
import PropTypes from 'prop-types';

const Contextmenu = ({ startUpdateComponent, deleteComponent, x, y }) => {

  if (!x || !y) {
    return null;
  }

  return (
    <div
      className="contextmenu"
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
    >
      <button
        is="coral-anchorbutton"
        type="button"
        icon="wrench"
        variant="quiet"
        title="Edit"
        size="M"
        onClick={() => startUpdateComponent()}
      >
        <coral-button-label className="_coral-Button-label" />
      </button>
      <button
        is="coral-anchorbutton"
        icon="delete"
        variant="quiet"
        title="Delete"
        size="M"
        type="submit"
        onClick={() => deleteComponent()}
      >
        <coral-button-label className="_coral-Button-label" />
      </button>
    </div>
  );
};

Contextmenu.propTypes = {
  startUpdateComponent: PropTypes.func.isRequired,
  deleteComponent: PropTypes.func.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
};

Contextmenu.defaultProps = {
  x: null,
  y: null,
};

export default Contextmenu;
