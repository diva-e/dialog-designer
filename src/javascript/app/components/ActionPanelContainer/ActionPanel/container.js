import { connect } from 'react-redux';
import actionNames from '../../../store/actionNames';

const mapStateToProps = (state, { id }) => ({
  isActive: state.settings.activePanel === id,
});

const mapDispatchToProps = (dispatch, { id }) => ({
  activate: () => {
    dispatch({
      type: actionNames.UI.ACTION_PANEL.ACTIVATE,
      activePanel: id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
