import Dom2react from 'dom-to-react';
import droptarget from '../app/components/DialogPreview/conditions/droptarget';
import component from '../app/components/DialogPreview/conditions/component';
// eslint-disable-next-line import/no-cycle
import adapt from '../app/components/DialogPreview/conditions/adapt';

const dom2reactRenderer = () => (
  new Dom2react([
    droptarget,
    component,
    adapt,
  ])
);

export default dom2reactRenderer;
