import React from 'react';

const EditComponent = ({ fields, updateFieldValue, saveEdit }) => (
  fields ? (
    <div className="edit-component">
      {Object.keys(fields).map((field) => (
        <input
          type="text"
          key={field}
          name={field}
          placeholder={field}
          value={fields[field]}
          onChange={({ target }) => updateFieldValue(field, target.value)}
        />
      ))}
      <br />
      <button
        type="submit"
        onClick={() => saveEdit()}
      >
        Save
      </button>
    </div>
  ) : null
);

export default EditComponent;
