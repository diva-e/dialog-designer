import { connect } from 'react-redux';
import actionNames from '../../store/actionNames';

const mapStateToProps = (state) => ({
  x: state.contextmenu.x,
  y: state.contextmenu.y,
});

const mapDispatchToProps = (dispatch) => ({
  startUpdateComponent: () => {
    dispatch({
      type: actionNames.COMPONENT.UPDATE,
    });
  },
  deleteComponent: () => {
    dispatch({
      type: actionNames.COMPONENT.DELETE,
    });
  },
  moveComponentUp: () => {
    dispatch({
      type: actionNames.COMPONENT.MOVE_UP,
    });
  },
  moveComponentDown: () => {
    dispatch({
      type: actionNames.COMPONENT.MOVE_DOWN,
    });
  },
  copyComponent: () => {
    dispatch({
      type: actionNames.COMPONENT.COPY,
    });
  },
  cutComponent: () => {
    dispatch({
      type: actionNames.COMPONENT.CUT,
    });
  },
  pasteComponentBefore: () => {
    dispatch({
      type: actionNames.COMPONENT.PASTE_BEFORE,
    });
  },
  pasteComponentAfter: () => {
    dispatch({
      type: actionNames.COMPONENT.PASTE_AFTER,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
