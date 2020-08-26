import { connect } from 'react-redux';

const mapStateToProps = (state, { id }) => ({
  isActive: state.settings.activePanel === id,
});

const mapDispatchToProps = (dispatch, { id }) => ({
  activate: () => {
    dispatch({
      type: 'ACTIVATE_ACTION_PANEL',
      activePanel: id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
