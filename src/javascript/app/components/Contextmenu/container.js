import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  x: state.contextmenu.x,
  y: state.contextmenu.y,
});

const mapDispatchToProps = (dispatch) => ({
  startUpdateComponent: () => {
    dispatch({
      type: 'START_UPDATE_COMPONENT',
    });
  },
  deleteComponent: () => {
    dispatch({
      type: 'START_DELETE_COMPONENT',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
