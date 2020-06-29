import React from 'react';
import { useDrag } from 'react-dnd';
import classNames from 'class-names';
import objectPath from 'object-path';
import coralComponents from '../../data/coral-components';

const doDrop = (what, where) => {
  const oldStructure = JSON.parse(window.localStorage.getItem('dndd-test-structure'));

  console.log(JSON.stringify(oldStructure, null, 2));

  objectPath.push(oldStructure, where.path, {
    type: what,
    properties: {},
    children: [],
  });

  // console.log(JSON.stringify(oldStructure));

  window.localStorage.setItem('dndd-test-structure', JSON.stringify(oldStructure));

  // window.location.reload();

  // console.log(`You dropped ${what} into ${where.path}!`);
};

const ComponentList = () => (
  <ul
    className="conponent-list"
  >
    {
      coralComponents.map((component) => {

        const [{ isDragging }, drag] = useDrag({
          item: { name: component.name, type: component.nodeName },
          end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
              doDrop(component.nodeName, dropResult);
            }
          },
          collect: (monitor) => ({
            isDragging: monitor.isDragging(),
          }),
        });

        return (
          <li
            ref={drag}
            className={
              classNames('conponent-list__entry', {
                'conponent-list__entry--is-dragging': isDragging,
              })
            }
            key={component.nodeName}
            title={component.description}
          >
            {component.name}
          </li>
        );
      })
    }
  </ul>
);

export default ComponentList;
