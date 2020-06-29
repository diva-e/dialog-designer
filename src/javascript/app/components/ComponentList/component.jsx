import React from 'react';
import coralComponents from '../../data/coral-components';

const ComponentList = () => (
  <ul
    className="conponent-list"
  >
    {
      coralComponents.map((component) => (
        <li
          className="conponent-list__entry"
          key={component.nodeName}
          title={component.description}
        >
          {component.name}
        </li>
      ))
    }
  </ul>
);

export default ComponentList;
