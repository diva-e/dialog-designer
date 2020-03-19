import { connect } from 'react-redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  dropped: () => {
    console.log(ownProps);
    dispatch({
      type: 'DROPPED',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
