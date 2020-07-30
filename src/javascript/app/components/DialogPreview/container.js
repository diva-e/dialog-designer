import { connect } from 'react-redux';
import structureToDom from '../../../tools/structureToDom';

const mapStateToProps = (state) => ({
  formDom: structureToDom(state.structure),
});

const mapDispatchToProps = (dispatch) => ({
  startEdit: (path) => {
    dispatch({
      type: 'START_EDIT_COMPONENT',
      payload: path,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
