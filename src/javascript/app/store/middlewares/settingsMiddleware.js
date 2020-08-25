const settingsMiddleware = (store) => (next) => (action) => {
  if (
    action.type === 'UPDATE_ACTION_PANEL_CONTAINER_WIDTH' ||
    action.type === 'UPDATE_PREVIEW_THEME' ||
    action.type === 'ACTIVATE_ACTION_PANEL'
  ) {
    const { settings } = store.getState();
    // Object.assign(action.payload, store.getState().settings);
    store.dispatch({
      type: 'SET_SETTINGS',
      payload: { ...settings },
    });
  }

  next(action);
};

export default settingsMiddleware;
