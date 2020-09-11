import actionNames from '../actionNames';

const setStructureClipboardMiddleware = (store) => (next) => (action) => {
  if (action.type === actionNames.STRUCTURE.CLIPBOARD.SET) {
    // todo: implement
  }

  next(action);
};

export default setStructureClipboardMiddleware;
