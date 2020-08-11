import structureToDom from '../../../tools/structureToDom';

const updateDialogPreviewMiddleware = (store) => {

  const { structure } = store.getState();
  const previewContainer = document.getElementById('preview');

  previewContainer.innerHTML = structureToDom(structure).outerHTML;

  return (next) => (action) => {
    if (action.type === 'SET_STRUCTURE') {
      console.log(action.payload);
      previewContainer.innerHTML = structureToDom(action.payload).outerHTML;
    }

    next(action);
  };
};

export default updateDialogPreviewMiddleware;
