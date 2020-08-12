import initDropTargetWebComponent from './DropTarget';
// import initComponentWrapper from './ComponentWrapper';

const initWebComponents = (store) => {
  initDropTargetWebComponent(store);
  // initComponentWrapper(store);

  document.getElementById('preview').addEventListener('contextmenu', (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    const componentWrapper = ev.target.closest('.has-contextmenu');

    if (!componentWrapper) {
      return;
    }

    console.log({
      type: 'OPEN_CONTEXTMENU',
      path: componentWrapper.dataset.path,
      x: ev.pageX,
      y: ev.pageY,
    });

    store.dispatch({
      type: 'OPEN_CONTEXTMENU',
      path: componentWrapper.dataset.path,
      x: ev.pageX,
      y: ev.pageY,
    });
  });
};

export default initWebComponents;
