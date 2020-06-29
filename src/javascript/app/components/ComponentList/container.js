import { connect } from 'react-redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  dropNewComponent: (what, where) => {
    dispatch({
      type: 'DROP_NEW_COMPONENT',
      payload: {
        what,
        where,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
