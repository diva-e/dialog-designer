import structureToDom from '../../../tools/structureToDom';
import actionNames from '../actionNames';
import tabFocusHelper from '../../../tools/tabFocusHelper';

const updateDialogPreviewMiddleware = (store) => {
  const { structure } = store.getState();
  const previewContainer = document.getElementById('preview');
  previewContainer.innerHTML = structureToDom(structure).outerHTML;
  return (next) => (action) => {
    if (action.type === actionNames.STRUCTURE.SET) {
      tabFocusHelper.disable(); // temporarily ignores the coral-tabview:change event which is triggered by setting innerHTML
      previewContainer.innerHTML = structureToDom(action.payload).outerHTML;
      tabFocusHelper.restore(); // switch to the last active tab(s) and stop ignoring coral-tabview:change events
    }

    next(action);
  };
};

export default updateDialogPreviewMiddleware;
