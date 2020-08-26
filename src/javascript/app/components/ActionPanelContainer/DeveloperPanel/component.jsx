import React from 'react';
import PropTypes from 'prop-types';

import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

class ActionPanelDeveloper extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
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

  render() {
    const {
      structure,
      updateStructure,
      xmlOutput,
    } = this.props;
    return (
      <div className="action-panel__content action-panel__content--developer-panel" ref={this.ref}>
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

ActionPanelDeveloper.propTypes = {
  structure: PropTypes.object.isRequired,
  updateStructure: PropTypes.func.isRequired,
  xmlOutput: PropTypes.string.isRequired,
};

export default ActionPanelDeveloper;
