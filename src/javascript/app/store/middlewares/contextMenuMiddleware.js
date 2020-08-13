const contextMenuMiddleware = (store) => {

  document.addEventListener('click', (ev) => {
    // optout if no contextmenu is open
    if (!document.getElementsByClassName('contextmenu').length) {
      return;
    }

    // close contextmenu if click outside
    if (ev.target.closest('.contextmenu') === null) {
      store.dispatch({
        type: 'CLOSE_CONTEXTMENU',
      });
    }
  });

  document.getElementById('preview').addEventListener('contextmenu', (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    const componentWrapper = ev.target.closest('.has-contextmenu');

    if (!componentWrapper) {
      return;
    }

    store.dispatch({
      type: 'OPEN_CONTEXTMENU',
      path: componentWrapper.dataset.path,
      x: ev.pageX,
      y: ev.pageY,
    });
  });

  return (next) => (action) => {
    next(action);
  };
};

export default contextMenuMiddleware;
