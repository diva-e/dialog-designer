import React from 'react';
import PropTypes from 'prop-types';

class ActionPanelDeveloper extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();

    this.increaseZoom = this.increaseZoom.bind(this);
    this.decreaseZoom = this.decreaseZoom.bind(this);
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

  increaseZoom() {
    this.props.updateXmlZoom(Math.min(5, this.props.xmlZoom + 1));
  }

  decreaseZoom() {
    this.props.updateXmlZoom(Math.max(1, this.props.xmlZoom - 1));
  }

  render() {
    const {
      xmlOutput,
    } = this.props;
    return (
      <div className="action-panel__content action-panel__content--developer-panel" ref={this.ref}>
        <div className="structure__xml-zoom-buttons">
          <button
            className="structure__xml-zoom-button"
            type="button"
            disabled={this.props.xmlZoom <= 1}
            onClick={this.decreaseZoom}
            title="Zoom out"
          >
            -
          </button>
          <button
            className="structure__xml-zoom-button"
            type="button"
            disabled={this.props.xmlZoom >= 5}
            onClick={this.increaseZoom}
            title="Zoom in"
          >
            +
          </button>
        </div>
        <pre className={`structure__xml structure__xml--zoom-${this.props.xmlZoom}`}>
          {xmlOutput}
        </pre>
      </div>
    );
  }
}

ActionPanelDeveloper.propTypes = {
  xmlZoom: PropTypes.number.isRequired,
  updateXmlZoom: PropTypes.func.isRequired,
  xmlOutput: PropTypes.string.isRequired,
};

export default ActionPanelDeveloper;
