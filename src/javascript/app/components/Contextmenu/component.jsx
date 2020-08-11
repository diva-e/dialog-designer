import React from 'react';

const Contextmenu = ({ editComponent, deleteComponent, closeContextmenu, x, y }) => {

  // todo: discuss location / approach
  document.addEventListener('click', (ev) => {
    // optout if no contextmenu is open
    if (!document.getElementsByClassName('contextmenu').length) {
      return;
    }

    // close contextmenu if click outside
    if (ev.target.closest('.contextmenu') === null) {
      // console.log('click outside of context menu -> close contextmenu');
      closeContextmenu();
    }
  });

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
        onClick={() => editComponent()}
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
