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
      type: 'DELETE_COMPONENT',
    });
  },
  moveComponentUp: () => {
    dispatch({
      type: 'MOVE_COMPONENT_UP',
    });
  },
  moveComponentDown: () => {
    dispatch({
      type: 'MOVE_COMPONENT_DOWN',
    });
  },
  copyComponent: () => {
    dispatch({
      type: 'COPY_COMPONENT',
    });
  },
  cutComponent: () => {
    dispatch({
      type: 'CUT_COMPONENT',
    });
  },
  pasteComponent: () => {
    dispatch({
      type: 'PASTE_COMPONENT',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
