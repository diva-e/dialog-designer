const CONTEXTMENU_OPEN_CLASS = 'contextmenu-opened';

const contextMenuMiddleware = (store) => {

  const unselectActiveComponentWrappers = () => {
    [...document.getElementsByClassName(CONTEXTMENU_OPEN_CLASS)]
      .forEach((openedContextmenuField) => {
        openedContextmenuField.classList.remove(CONTEXTMENU_OPEN_CLASS);
      });
  };

  document.addEventListener('click', (ev) => {
    // optout if no contextmenu is open
    if (!document.getElementsByClassName('contextmenu').length) {
      return;
    }

    // close contextmenu if click outside
    if (ev.target.closest('.contextmenu') === null) {

      unselectActiveComponentWrappers();

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

    unselectActiveComponentWrappers();
    componentWrapper.classList.add(CONTEXTMENU_OPEN_CLASS);

    const { top, left } = componentWrapper.getBoundingClientRect();

    store.dispatch({
      type: 'OPEN_CONTEXTMENU',
      path: componentWrapper.dataset.path,
      x: left,
      y: top - 78,
    });
  });

  return (next) => (action) => {

    if (action.type === 'CLOSE_EDIT_COMPONENT') {
      unselectActiveComponentWrappers();
    }

    next(action);
  };
};

export default contextMenuMiddleware;
