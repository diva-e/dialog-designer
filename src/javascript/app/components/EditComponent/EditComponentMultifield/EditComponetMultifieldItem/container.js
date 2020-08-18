import { connect } from 'react-redux';

const mapStateToProps = () => ({ });

const mapDispatchToProps = (dispatch) => ({
  deleteMultifieldItem: () => {
    dispatch({
      type: 'DELETE_MULTIFIELD_ITEM',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
