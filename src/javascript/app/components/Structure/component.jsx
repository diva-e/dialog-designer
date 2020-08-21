import React from 'react';
import PropTypes from 'prop-types';

// todo: #29 discuss the use of structure editor / probably remove and maybe replace by field meta data like comments etc.
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

class Structure extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.resizeStructure = this.resizeStructure.bind(this);
    this.toggleShowHideStructurePanel = this.toggleShowHideStructurePanel.bind(this);
    // todo: #28 save open/close stat as well as custom width
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

  toggleShowHideStructurePanel() {
    const structureResizePanel = this.ref.current;
    structureResizePanel.classList.toggle('structure--closed');
  }

  resizeStructure(ev) {
    const MIN_WIDTH = 350;
    const structureResizePanel = this.ref.current;
    const dx = this.mousePosition - ev.x;
    this.mousePosition = ev.x;
    const newWidth = (window.parseInt(window.getComputedStyle(structureResizePanel, '').width) + dx);
    if (newWidth >= MIN_WIDTH) {
      structureResizePanel.style.width = `${newWidth}px`;
    }
  }

  render() {
    const {
      structure,
      updateStructure,
      xmlOutput,
    } = this.props;
    return (
      <div className="structure" ref={this.ref}>
        <button
          className="structure__show-hide"
          onClick={this.toggleShowHideStructurePanel}
          type="button"
        >
          <coral-icon icon="railRightClose" size="S" />
          <coral-icon icon="railRightOpen" size="S" />
          <span>Structure</span>
        </button>
        <div className="structure__json-editor">
          <Editor
            value={structure}
            onChange={updateStructure}
          />
        </div>
        <pre className="structure__xml">
          {xmlOutput}
        </pre>
      </div>
    );
  }
}

Structure.propTypes = {
  structure: PropTypes.object.isRequired,
  updateStructure: PropTypes.func.isRequired,
  xmlOutput: PropTypes.string.isRequired,
};

export default Structure;
