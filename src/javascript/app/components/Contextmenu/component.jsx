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
        block
        onClick={() => startUpdateComponent()}
      >
        <coral-button-label className="_coral-Button-label">Edit</coral-button-label>
      </button>
      <button
        is="coral-anchorbutton"
        icon="delete"
        variant="warning"
        title="Delete"
        size="M"
        type="submit"
        block
        onClick={() => deleteComponent()}
      >
        <coral-button-label className="_coral-Button-label">Delete</coral-button-label>
      </button>
    </div>
  );
};

export default Contextmenu;
