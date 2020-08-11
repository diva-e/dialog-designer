import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import DropTarget from '../../app/components/DropTarget';

const initDropTargetWebComponent = (store) => {
  class DropTargetWebComponent extends HTMLElement {
    constructor() {
      super();
      render(
        <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
            <DropTarget
              accepts={this.dataset.accept.split(',')}
              path={this.dataset.path}
            />
          </DndProvider>
        </Provider>,
        this,
      );
    }
  }

  window.customElements.define('drop-target', DropTargetWebComponent);
};

export default initDropTargetWebComponent;
