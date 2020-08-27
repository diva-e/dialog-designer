import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';

import DeveloperPanel from './DeveloperPanel';
import ActionPanel from './ActionPanel';


class ActionPanelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.resizeAPC = this.resizeAPC.bind(this);
    this.isMinified = this.isMinified.bind(this);
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
    document.removeEventListener('mousemove', this.resizeAPC);
  }

  onMouseDown(ev) {
    const BORDER_SIZE = 4;
    if (ev.offsetX < BORDER_SIZE) {
      this.mousePosition = ev.x;
      document.addEventListener('mousemove', this.resizeAPC, false);
    }
  }

  onMouseUp() {
    document.removeEventListener('mousemove', this.resizeAPC, false);
  }

  resizeAPC(ev) {
    const MIN_WIDTH = 350;
    const structureResizePanel = this.ref.current;
    const dx = this.mousePosition - ev.x;
    this.mousePosition = ev.x;
    const newWidth = (window.parseInt(window.getComputedStyle(structureResizePanel, '').width) + dx);
    if (newWidth >= MIN_WIDTH) {
      this.props.updateActionPanelWidth(newWidth);
    }
  }

  isMinified() {
    return this.props.actionPanelContainerWidth <= 0;
  }

  closeActionPanelContainer() {

  }

  render() {
    const {
      closeActionPanel,
    } = this.props;
    return (
      <div
        className={
          classNames('action-panel-container', {
            'action-panel-container--minified': this.isMinified(),
          })
        }
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
          <div className="action-panel__content">
            TO BE IMPLEMENTED (META)
          </div>
        </ActionPanel>
        <ActionPanel
          id="library"
          title="Library"
          icon="bookmark"
        >
          <div className="action-panel__content">
            TO BE IMPLEMENTED (Library)
          </div>
        </ActionPanel>
        <ActionPanel
          id="dev"
          title="Developer"
          icon="brackets"
        >
          <DeveloperPanel />
        </ActionPanel>
        <button
          className="action-panel__closer"
          onClick={closeActionPanel}
          type="button"
        >
          <coral-icon
            icon="close"
            size="S"
          />
        </button>
      </div>
    );
  }
}

ActionPanelContainer.propTypes = {
  updateActionPanelWidth: PropTypes.func.isRequired,
  actionPanelContainerWidth: PropTypes.number.isRequired,
  closeActionPanel: PropTypes.func.isRequired,
};

export default ActionPanelContainer;
