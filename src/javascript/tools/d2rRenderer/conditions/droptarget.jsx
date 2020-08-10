import React from 'react';
import DropTarget from '../../../app/components/DropTarget';

const droptarget = {
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
};

export default droptarget;
