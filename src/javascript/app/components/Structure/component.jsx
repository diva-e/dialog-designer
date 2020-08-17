import React from 'react';
import PropTypes from 'prop-types';

import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

const Structure = ({
  structure,
  updateStructure,
  xmlOutput,
}) => (
  <div
    className="structure"
  >
    <div
      className="structure__json-editor"
    >
      <Editor
        value={structure}
        onChange={updateStructure}
      />
    </div>
    <pre
      className="structure__xml"
    >
      {xmlOutput}
    </pre>
  </div>
);

Structure.propTypes = {
  structure: PropTypes.object.isRequired,
  updateStructure: PropTypes.func.isRequired,
  xmlOutput: PropTypes.string.isRequired,
};

export default Structure;
