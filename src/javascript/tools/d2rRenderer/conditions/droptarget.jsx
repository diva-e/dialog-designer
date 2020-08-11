import React from 'react';
import DropTarget from '../../../app/components/DropTarget';

const droptarget = {
  condition: (node) => (
    node.nodeName.toLowerCase() === 'droptarget'
  ),
  action: (node, key) => {
    const dropTarget = (
      <DropTarget
        key={key}
        accepts={node.dataset.accept.split(',')}
        path={node.dataset.path}
        dropped={() => {
        }}
      />
    );

    if (node.dataset.wrap) {
      return React.createElement(node.dataset.wrap, { key }, [dropTarget]);
    }

    return dropTarget;
  },
};

export default droptarget;
