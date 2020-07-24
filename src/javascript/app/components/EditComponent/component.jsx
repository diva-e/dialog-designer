import React from 'react';

const EditComponent = ({ fields, updateFieldValue, saveEdit }) => (
  fields ? (
    <>
      <div className="edit-component__backdrop" />
      <div className="edit-component">
        {Object.values(fields).map((field) => (
          <input
            type="text"
            key={field.name}
            name={field.name}
            placeholder={field.name}
            value={field.value}
            onChange={({ target }) => updateFieldValue(field.name, target.value)}
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
    </>
  ) : null
);

export default EditComponent;
