import React from 'react';
import Adapt from '../../Adapt/component';

const adapt = {
  condition: (node) => (
    node.nodeName.toLowerCase() === 'adapt'
  ),
  action: () => (
    <Adapt />
  ),
};

export default adapt;
