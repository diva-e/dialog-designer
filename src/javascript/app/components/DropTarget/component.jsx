import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import classNames from 'class-names';

const DropTarget = ({ accepts, path }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: accepts,
    drop: () => ({ name: 'droptarget', path }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  if (!canDrop) {
    return null;
  }

  return (
    <div
      ref={drop}
      className={
        classNames('drop-target', {
          'drop-target--can-drop': canDrop,
          'drop-target--is-over': isOver,
        })
      }
    >
      <span
        title={`Accepts: ${accepts.join(', ')}`}
      >
        Drag field component here
      </span>
    </div>
  );
};

DropTarget.propTypes = {
  accepts: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
};

export default DropTarget;

