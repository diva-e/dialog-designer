import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  example: state.example,
});

const mapDispatchToProps = (dispatch) => ({
  toggleExample: () => {
    dispatch({
      type: 'TOGGLE_EXAMPLE',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
