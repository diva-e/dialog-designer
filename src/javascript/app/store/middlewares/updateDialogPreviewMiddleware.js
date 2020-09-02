import structureToDom from '../../../tools/structureToDom';
import actionNames from '../actionNames';

const updateDialogPreviewMiddleware = (store) => {
  const { structure } = store.getState();
  const previewContainer = document.getElementById('preview');
  previewContainer.innerHTML = structureToDom(structure).outerHTML;
  return (next) => (action) => {
    if (action.type === actionNames.STRUCTURE.SET) {
      previewContainer.innerHTML = structureToDom(action.payload).outerHTML;
    }

    next(action);
  };
};

export default updateDialogPreviewMiddleware;
