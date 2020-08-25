import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  actionPanelContainerWidth: state.settings.actionPanelContainerWidth,
});

const mapDispatchToProps = (dispatch) => ({
  updateActionPanelWidth: (value) => {
    dispatch({
      type: 'UPDATE_ACTION_PANEL_CONTAINER_WIDTH',
      settings: {
        actionPanelContainerWidth: value,
      },
    });
  },
  activateActionPanel: (panel) => {
    dispatch({
      type: 'ACTIVATE_ACTION_PANEL',
      settings: {
        activePanel: panel,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
