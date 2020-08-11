import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  x: state.contextmenu.x,
  y: state.contextmenu.y,
});

const mapDispatchToProps = (dispatch) => ({
  editComponent: () => {
    dispatch({
      type: 'START_EDIT_COMPONENT',
    });
  },
  deleteComponent: () => {
    dispatch({
      type: 'DELETE_COMPONENT',
    });
  },
  closeContextmenu: () => {
    dispatch({
      type: 'CLOSE_CONTEXTMENU',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
