import { connect } from 'react-redux';
import actionNames from '../../store/actionNames';

const mapStateToProps = (state) => ({
  actionPanelContainerWidth: state.settings.actionPanelContainerWidth,
  activePanel: state.settings.activePanel,
});

const mapDispatchToProps = (dispatch) => ({
  updateActionPanelWidth: (actionPanelContainerWidth) => {
    dispatch({
      type: actionNames.UI.ACTION_PANEL.UPDATE_CONTAINER_WIDTH,
      actionPanelContainerWidth,
    });
  },
  closeActionPanel: () => {
    dispatch({
      type: actionNames.UI.ACTION_PANEL.CLOSE,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
