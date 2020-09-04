import actionNames from '../actionNames';

const settingsMiddleware = (store) => (next) => (action) => {
  next(action);

  if (action.type === actionNames.UI.ACTION_PANEL.ACTIVATE) {
    const { settings } = store.getState();
    if (settings.actionPanelContainerWidth === 0) {
      store.dispatch({
        type: actionNames.UI.ACTION_PANEL.UPDATE_CONTAINER_WIDTH,
        actionPanelContainerWidth: 350,
      });
    }
  }

  if (
    action.type === actionNames.UI.ACTION_PANEL.UPDATE_CONTAINER_WIDTH ||
    action.type === actionNames.UI.PREVIEW.UPDATE_THEME ||
    action.type === actionNames.UI.ACTION_PANEL.ACTIVATE ||
    action.type === actionNames.UI.ACTION_PANEL.CLOSE
  ) {
    const { settings } = store.getState();
    // eslint-disable-next-line no-undef
    window.localStorage.setItem(STORAGE.SETTINGS, JSON.stringify(settings));
  }
};

export default settingsMiddleware;
