const settingsMiddleware = (store) => (next) => (action) => {
  next(action);

  if (
    action.type === 'UPDATE_ACTION_PANEL_CONTAINER_WIDTH' ||
    action.type === 'UPDATE_PREVIEW_THEME' ||
    action.type === 'ACTIVATE_ACTION_PANEL'
  ) {
    const { settings } = store.getState();
    window.localStorage.setItem('adc-settings', JSON.stringify(settings));
  }
};

export default settingsMiddleware;
