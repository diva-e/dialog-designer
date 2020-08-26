const defaultSettings = {
  activePanel: 'dev',
  actionPanelContainerWidth: 350,
  previewTheme: 'coral-light',
};

const settingsReducer = (value = defaultSettings, action) => {
  switch (action.type) {
    case 'UPDATE_ACTION_PANEL_CONTAINER_WIDTH':
      return {
        ...value,
        actionPanelContainerWidth: action.actionPanelContainerWidth,
      };
    case 'ACTIVATE_ACTION_PANEL':
      return {
        ...value,
        activePanel: action.activePanel,
      };
    case 'UPDATE_PREVIEW_THEME':
      return {
        ...value,
        previewTheme: action.previewTheme,
      };
    case 'CLOSE_ACTION_PANEL':
      return {
        ...value,
        activePanel: null,
      };
    default:
      return value;
  }
};

export default settingsReducer;
