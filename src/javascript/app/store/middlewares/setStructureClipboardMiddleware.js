const setStructureClipboardMiddleware = (store) => (next) => (action) => {
  if (action.type === 'SET_STRUCTURE_CLIPBOARD') {
    // todo: implement
  }

  next(action);
};

export default setStructureClipboardMiddleware;
