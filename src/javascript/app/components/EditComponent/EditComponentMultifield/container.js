import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({
  addItem: () => {
    dispatch({
      type: 'ADD_MUTLIFIELD_ITEM',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
