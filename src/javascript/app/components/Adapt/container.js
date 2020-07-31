import { connect } from 'react-redux';
import objectPath from 'object-path';
import structureToDom from '../../../tools/structureToDom';

const mapStateToProps = (state, { path, to }) => {
  const childrenRaw = objectPath.get(state.structure, path) || [];

  const children = childrenRaw.map((child) => ({
    ...child,
    type: to,
  }))
    .map((child) => (
      structureToDom(child, `${path}.`)
    ));

  console.log(children);

  return ({
    children,
  });
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps);
