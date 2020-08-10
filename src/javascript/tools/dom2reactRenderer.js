import Dom2react from 'dom-to-react';
import droptarget from '../app/components/DialogPreview/conditions/droptarget';
import component from '../app/components/DialogPreview/conditions/component';
// import adapt from '../app/components/DialogPreview/conditions/adapt';

// todo: readd adapt
const dom2reactRenderer = () => (
  new Dom2react([
    droptarget,
    component,
  ])
);

export default dom2reactRenderer;
