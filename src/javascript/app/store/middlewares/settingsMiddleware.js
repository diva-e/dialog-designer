const settingsMiddleware = (store) => (next) => (action) => {
  next(action);

  if (action.type === 'ACTIVATE_ACTION_PANEL') {
    const { settings } = store.getState();
    if (settings.actionPanelContainerWidth === 0) {
      // todo: #35 presafe old APC Width before closing and then resetting to that here
      store.dispatch({
        type: 'UPDATE_ACTION_PANEL_CONTAINER_WIDTH',
        actionPanelContainerWidth: 350,
      });
    }
  }

  if (
    action.type === 'UPDATE_ACTION_PANEL_CONTAINER_WIDTH' ||
    action.type === 'UPDATE_PREVIEW_THEME' ||
    action.type === 'ACTIVATE_ACTION_PANEL' ||
    action.type === 'CLOSE_ACTION_PANEL'
  ) {
    const { settings } = store.getState();
    window.localStorage.setItem('adc-settings', JSON.stringify(settings));
  }
};

export default settingsMiddleware;
