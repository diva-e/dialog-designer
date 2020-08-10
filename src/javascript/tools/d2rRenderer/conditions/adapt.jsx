import React from 'react';
import Adapt from '../../../app/components/Adapt';

const adapt = {
  condition: (node) => (
    node.nodeName.toLowerCase() === 'adapt'
  ),
  action: (node, key, level, parser) => (
    <Adapt
      key={key}
      to={node.dataset.to}
      path={node.dataset.path}
      level={level}
      parser={parser}
    />
  ),
};

export default adapt;
