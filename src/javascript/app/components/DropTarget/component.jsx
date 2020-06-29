import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import classNames from 'class-names';

const DropTarget = ({ dropped, accepts }) => {

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: accepts,
    drop: () => ({ name: 'droptarget' }),
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
      <button
        type="button"
        onClick={dropped}
      >
        {`[DROP-ZONE | Accepts: ${accepts.join(', ')}]`}
      </button>
    </div>
  );
};

DropTarget.propTypes = {
  dropped: PropTypes.func.isRequired,
};

export default DropTarget;
