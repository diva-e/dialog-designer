import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  structure: state.structure,
});

const mapDispatchToProps = (dispatch) => ({
  updateStructure: (structure) => {
    dispatch({
      type: 'SET_STRUCTURE',
      payload: structure,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
