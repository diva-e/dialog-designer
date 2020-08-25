const settingsMiddleware = (store) => (next) => (action) => {
  if (action.type === 'UPDATE_ACTION_PANEL_CONTAINER_WIDTH') {
    Object.assign(action.payload, store.getState().settings);
  }

  if (action.type === 'UPDATE_PREVIEW_THEME') {
    Object.assign(action.payload, store.getState().settings);
  }

  if (action.type === 'ACTIVATE_ACTION_PANEL') {
    Object.assign(action.payload, store.getState().settings);
  }

  store.dispatch({
    type: 'SET_SETTINGS',
    payload: { ...store.getState().settings },
  });

  next(action);
};

export default settingsMiddleware;
