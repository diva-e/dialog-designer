import actionNames from '../actionNames';

const defaultSettings = {
  activePanel: 'dev',
  actionPanelContainerWidth: 350,
  previewTheme: 'coral-light',
};

const settingsReducer = (value = defaultSettings, action) => {
  switch (action.type) {
    case actionNames.UI.ACTION_PANEL.UPDATE_CONTAINER_WIDTH:
      return {
        ...value,
        actionPanelContainerWidth: action.actionPanelContainerWidth,
      };
    case actionNames.UI.ACTION_PANEL.ACTIVATE:
      return {
        ...value,
        activePanel: action.activePanel,
      };
    case actionNames.UI.PREVIEW.UPDATE_THEME:
      return {
        ...value,
        previewTheme: action.previewTheme,
      };
    case actionNames.UI.ACTION_PANEL.CLOSE:
      return {
        ...value,
        activePanel: '',
      };
    default:
      return value;
  }
};

export default settingsReducer;
