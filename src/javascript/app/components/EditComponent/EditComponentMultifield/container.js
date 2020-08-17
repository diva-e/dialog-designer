import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({
  addMultifieldItem: () => {
    dispatch({
      type: 'ADD_MULTIFIELD_ITEM',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
