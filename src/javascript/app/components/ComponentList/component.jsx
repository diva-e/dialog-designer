import React from 'react';
import { useDrag } from 'react-dnd';
import classNames from 'class-names';
import coralComponents from '../../data/coral-components';

const ComponentList = ({ dropNewComponent }) => (
  <ul
    className="component-list"
  >
    {
      coralComponents.map((component) => {

        const [{ isDragging }, drag] = useDrag({
          item: { name: component.name, type: component.nodeName },
          end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
              dropNewComponent(component.nodeName, dropResult);
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
              classNames('component-list__entry', {
                'component-list__entry--is-dragging': isDragging,
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
