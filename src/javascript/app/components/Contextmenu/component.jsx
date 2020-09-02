import React from 'react';
import PropTypes from 'prop-types';

const Contextmenu = ({
  startUpdateComponent,
  deleteComponent,
  moveComponentUp,
  moveComponentDown,
  cutComponent,
  pasteComponent,
  x,
  y,
}) => {
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
        icon="ArrowUp"
        variant="quiet"
        title="Move Up"
        size="M"
        type="button"
        onClick={() => moveComponentUp()}
      >
        <coral-button-label className="_coral-Button-label" />
      </button>
      <button
        is="coral-anchorbutton"
        icon="ArrowDown"
        variant="quiet"
        title="Move Down"
        size="M"
        type="button"
        onClick={() => moveComponentDown()}
      >
        <coral-button-label className="_coral-Button-label" />
      </button>
      <button
        is="coral-anchorbutton"
        icon="delete"
        variant="quiet"
        title="Delete"
        size="M"
        type="button"
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
  moveComponentUp: PropTypes.func.isRequired,
  moveComponentDown: PropTypes.func.isRequired,
  cutComponent: PropTypes.func.isRequired,
  pasteComponent: PropTypes.func.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
};

Contextmenu.defaultProps = {
  x: null,
  y: null,
};

export default Contextmenu;
