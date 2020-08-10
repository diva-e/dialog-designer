import Dom2react from 'dom-to-react';
import droptarget from './conditions/droptarget';
import component from './conditions/component';
import adapt from './conditions/adapt';

const dom2reactRenderer = () => (
  new Dom2react([
    droptarget,
    component,
    adapt,
  ])
);

export default dom2reactRenderer;
