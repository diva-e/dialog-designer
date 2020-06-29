import React from 'react';
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
      {`[DROP-ZONE | Accepts: ${accepts.join(', ')}]`}
      <br />
      { path }
    </div>
  );
};

export default DropTarget;
