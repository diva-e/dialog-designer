import React from 'react';

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

export default Contextmenu;
