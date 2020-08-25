import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  actionPanelContainerWidth: state.settings.actionPanelContainerWidth,
  activePanel: state.settings.activePanel,
});

const mapDispatchToProps = (dispatch) => ({
  updateActionPanelWidth: (actionPanelContainerWidth) => {
    dispatch({
      type: 'UPDATE_ACTION_PANEL_CONTAINER_WIDTH',
      settings: {
        actionPanelContainerWidth,
      },
    });
  },
  activateActionPanel: (activePanel) => {
    dispatch({
      type: 'ACTIVATE_ACTION_PANEL',
      settings: {
        activePanel,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
