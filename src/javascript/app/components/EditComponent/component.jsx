import React from 'react';

const EditComponent = ({ fields, updateFieldValue, saveEdit, closeEdit }) => (
  fields ? (
    <div className="yet-another-wrapper">
      <div className="edit-component__backdrop" />
      <coral-dialog-add className="cq-Dialog _coral-BaseOverlay _coral-Dialog-wrapper cq-dialog-floating is-open" backdrop="none" variant="default" role="dialog" aria-labelledby="coral-id-631-add" closable="off" open="open" aria-hidden="false">
        <div handle="topTabCapture" coral-tabcapture="top" role="presentation" />
        <div handle="wrapper">
          <form className="coral-Form--vertical cq-dialog foundation-form foundation-layout-form _coral-Dialog _coral-Dialog--noBackdrop is-open" action="#" method="post" data-foundation-form-ajax="true" coral-dialog-size="">
            <div className="_coral-Dialog-header u-coral-openHand" handle="headerWrapper">
              <div className="_coral-Dialog-dragZone" handle="dragZone" />
              <coral-dialog-header className="cq-dialog-header _coral-Dialog-title" id="coral-id-631-add">
                <div className="cq-dialog-actions u-coral-pullRight" />
                Component Properties
              </coral-dialog-header>
            </div>
            <coral-dialog-content-add id="dnd-add-component" className="_coral-Dialog-content">
              <div className="cq-dialog-content">

                <div className="edit-component">
                  {Object.values(fields).map((field) => (
                    <div className="coral-Form-fieldwrapper">
                      <label id="label_{field.name}" className="coral-Form-fieldlabel">
                        {field.name}
                      </label>
                      <input
                        className="coral-Form-field _coral-Textfield"
                        type="text"
                        key={field.name}
                        name={field.name}
                        labelledby="label_{field.name}"
                        data-foundation-validation=""
                        data-validation=""
                        id="{name}"
                        aria-labelledby="label_{field.name}"
                        variant="default"
                        onChange={({ target }) => updateFieldValue(field.name, target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </coral-dialog-content-add>
            <coral-dialog-footer-add className="_coral-Dialog-footer">
              <button
                type="button"
                icon=""
                variant="default"
                className="cq-dialog-header-action cq-dialog-cancel _coral-Button _coral-Button--primary"
                title="Cancel"
                size="M"
                onClick={() => closeEdit()}
              >
                <coral-button-label class="_coral-Button-label">Cancel</coral-button-label>
              </button>
              <button
                icon=""
                variant="cta"
                className="_coral-Button _coral-Button--cta"
                title="Save"
                size="M"
                type="submit"
                onClick={() => saveEdit()}
              >
                <coral-button-label className="_coral-Button-label">Save</coral-button-label>
              </button>
            </coral-dialog-footer-add>
          </form>
        </div>
        <div handle="intermediateTabCapture" coral-tabcapture="intermediate" role="presentation" />
        <div handle="bottomTabCapture" coral-tabcapture="bottom" role="presentation" />
      </coral-dialog-add>
    </div>
  ) : null
);

export default EditComponent;
