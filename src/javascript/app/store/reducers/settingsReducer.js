import actionNames from '../actionNames';

const defaultSettings = {
  activePanel: 'dev',
  actionPanelContainerWidth: 350,
  previewTheme: 'coral-light',
  xmlZoom: 3,
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
    case actionNames.UI.ACTION_PANEL.UPDATE_XML_ZOOM:
      return {
        ...value,
        xmlZoom: action.xmlZoom,
      };
    default:
      return value;
  }
};

export default settingsReducer;
