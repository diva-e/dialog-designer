import React from 'react';
import { useDrag } from 'react-dnd';
import classNames from 'class-names';
import coralComponents from '../../data/coral-components';

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
              // eslint-disable-next-line no-alert
              alert(`You dropped ${item.name} into ${dropResult.name}!`);
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
