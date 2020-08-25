const settingsReducer = (value = null, action) => {
  switch (action.type) {
    case 'UPDATE_ACTION_PANEL_CONTAINER_WIDTH':
      return {
        value: action.actionPanelContainerWidth,
      };
    case 'ACTIVATE_ACTION_PANEL':
      return {
        value: action.activePanel,
      };
    case 'UPDATE_PREVIEW_THEME':
      return {
        value: action.previewTheme,
      };
    case 'SET_SETTINGS':
      // todo:rename and outsource storage name
      window.localStorage.setItem('adc-settings', JSON.stringify(action.payload));
      return action.payload;
    default:
      return value;
  }
};

export default settingsReducer;
