import { connect } from 'react-redux';
import structureToDom from '../../../tools/structureToDom';

const mapStateToProps = (state) => ({
  formDom: structureToDom(state.structure),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps);
