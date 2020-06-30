import React from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

const Structure = ({ structure, updateStructure, xmlOutput }) => (
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

export default Structure;
