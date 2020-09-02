import { connect } from 'react-redux';
import actionNames from '../../store/actionNames';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  dropNewComponent: (what, where) => {
    dispatch({
      type: actionNames.COMPONENT.DROP,
      payload: {
        what,
        where,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
