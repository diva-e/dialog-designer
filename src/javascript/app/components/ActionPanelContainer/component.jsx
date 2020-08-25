import React from 'react';
import PropTypes from 'prop-types';

import DeveloperPanel from './DeveloperPanel';
import ActionPanel from './ActionPanel';

class ActionPanelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.resizeStructure = this.resizeStructure.bind(this);
  }

  componentDidMount() {
    const structureResizePanel = this.ref.current;
    this.mousePosition = null;
    structureResizePanel.addEventListener('mousedown', this.onMouseDown, false);
    structureResizePanel.addEventListener('mouseup', this.onMouseUp, false);
  }

  componentWillUnmount() {
    const structureResizePanel = this.ref.current;
    structureResizePanel.removeEventListener('mousedown', this.onMouseDown);
    structureResizePanel.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.resizeStructure);
  }

  onMouseDown(ev) {
    const BORDER_SIZE = 4;
    if (ev.offsetX < BORDER_SIZE) {
      this.mousePosition = ev.x;
      document.addEventListener('mousemove', this.resizeStructure, false);
    }
  }

  onMouseUp() {
    document.removeEventListener('mousemove', this.resizeStructure, false);
  }

  resizeStructure(ev) {
    const MIN_WIDTH = 350;
    const structureResizePanel = this.ref.current;
    const dx = this.mousePosition - ev.x;
    this.mousePosition = ev.x;
    const newWidth = (window.parseInt(window.getComputedStyle(structureResizePanel, '').width) + dx);
    if (newWidth >= MIN_WIDTH) {
      // structureResizePanel.style.width = `${newWidth}px`;
      this.props.updateActionPanelWidth(newWidth);
    }
  }

  render() {
    return (
      <div
        className="action-panel-container"
        ref={this.ref}
        style={{
          width: this.props.actionPanelContainerWidth,
        }}
      >
        <ActionPanel
          id="meta"
          title="Meta"
          icon="organize"
        >
          META Stuff
        </ActionPanel>
        <ActionPanel
          id="library"
          title="Library"
          icon="bookmark"
        >
          Library Stuff
        </ActionPanel>
        <ActionPanel
          id="dev"
          title="Developer"
          icon="brackets"
        >
          <DeveloperPanel />
        </ActionPanel>
      </div>
    );
  }
}

ActionPanelContainer.propTypes = {
  updateActionPanelWidth: PropTypes.func.isRequired,
  actionPanelContainerWidth: PropTypes.number.isRequired,
};

export default ActionPanelContainer;
