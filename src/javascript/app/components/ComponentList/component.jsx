import React from 'react';
import { useDrag } from 'react-dnd';
import classNames from 'class-names';
import coralComponents from '../../data/coral-components';

const ComponentList = ({ dropNewComponent }) => (
  <ul
    className="component-list sidepanel"
  >
    {
      coralComponents
        .filter(({ hidden }) => !hidden)
        .map((component) => {

          const [{ isDragging }, drag] = useDrag({
            item: { name: component.name, type: component.id },
            end: (item, monitor) => {
              const dropResult = monitor.getDropResult();
              if (item && dropResult) {
                dropNewComponent(component.id, dropResult);
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
                classNames('component-list__entry _coral-Menu-item', {
                  'component-list__entry--is-dragging': isDragging,
                })
              }
              key={component.id}
              title={component.description}
            >
              <div className="_coral-Menu-itemLabel">
                <div className="editor-ComponentBrowser-component cq-draggable u-coral-openHand">
                  <div className="editor-ComponentBrowser-component-icon">
                    <coral-tag size="M" className="_coral-Label _coral-Label--medium _coral-Label--grey" color="grey">
                      <coral-tag-label className="_coral-Tags-itemLabel">{component.tag}</coral-tag-label>
                    </coral-tag>
                  </div>
                  <div className="editor-ComponentBrowser-component-title">
                    <div className="foundation-collection-item-title">{component.name}</div>
                    <div className="foundation-layout-util-subtletext">{component.category}</div>
                  </div>
                </div>
              </div>
            </li>
          );
        })
    }
  </ul>
);

export default ComponentList;
