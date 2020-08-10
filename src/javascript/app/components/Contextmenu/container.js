import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  x: state.contextmenu.x,
  y: state.contextmenu.y,
});

const mapDispatchToProps = (dispatch) => ({
  editComponent: () => {
    dispatch({
      type: 'EDIT_COMPONENT',
    });
  },
  deleteComponent: () => {
    dispatch({
      type: 'DELETE_COMPONENT',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
