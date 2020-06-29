import { connect } from 'react-redux';
import structureToDom from '../../../tools/structureToDom';

const mapStateToProps = () => ({
  formDom: structureToDom(JSON.parse(window.localStorage.getItem('dndd-test-structure'))),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps);
