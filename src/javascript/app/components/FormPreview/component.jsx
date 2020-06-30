import React from 'react';
import Dom2react from 'dom-to-react';
import DropTarget from '../DropTarget';

const d2r = new Dom2react([
  {
    condition: (node) => (
      node.nodeName.toLowerCase() === 'droptarget'
    ),
    action: (node, key) => (
      <DropTarget
        key={key}
        accepts={node.dataset.accept.split(',')}
        path={node.dataset.path}
        dropped={() => {}}
      />
    ),
  },
]);

const FormPreview = ({ formDom }) => (
  <div className="form-preview">
    {d2r.prepareNode(formDom)}
  </div>
  // <div className="form-preview" ref={(node) => node.appendChild(formDom)} />
);

export default FormPreview;
