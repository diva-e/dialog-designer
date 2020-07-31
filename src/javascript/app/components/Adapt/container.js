import { connect } from 'react-redux';
import objectPath from 'object-path';

const mapStateToProps = (state, ownProps) => {
  console.log(objectPath.get(state.structure, ownProps.path));
  console.log(state.structure, ownProps.path);
  return ({});
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps);
