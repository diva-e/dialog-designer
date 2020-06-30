import React from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

const Structure = ({ structure, updateStructure }) => (
  <div
    className="structure"
  >
    <Editor
      value={structure}
      onChange={updateStructure}
    />
  </div>
);

export default Structure;
