import React from 'react';

console.log('Sdsjjdgsfhhjsgjfsf');

const Contextmenu = ({ editComponent, deleteComponent, x, y }) => {
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
        type="button"
        icon="edit"
        variant="primary"
        className="_coral-Button _coral-Button--warning"
        title="Edit"
        size="M"
        onClick={() => editComponent()}
      >
        <coral-button-label className="_coral-Button-label">Edit</coral-button-label>
      </button>
      <button
        icon="delete"
        variant="warning"
        className="_coral-Button _coral-Button--cta"
        title="Delete"
        size="M"
        type="submit"
        onClick={() => deleteComponent()}
      >
        <coral-button-label className="_coral-Button-label">Delete</coral-button-label>
      </button>
    </div>
  );
};

export default Contextmenu;
