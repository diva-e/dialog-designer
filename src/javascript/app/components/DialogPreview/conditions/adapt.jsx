import React from 'react';
import Adapt from '../../Adapt';

const adapt = {
  condition: (node) => (
    node.nodeName.toLowerCase() === 'adapt'
  ),
  action: (node, key) => (
    <Adapt
      key={key}
      to={node.dataset.to}
      path={node.dataset.path}
    />
  ),
};

export default adapt;
