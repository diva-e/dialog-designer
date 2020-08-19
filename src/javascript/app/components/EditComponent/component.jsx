import React from 'react';
import PropTypes from 'prop-types';

import constants from '../../data/coral-components/constants';

import EditComponentTextfield from './EditComponentTextfield';
import EditComponentCheckbox from './EditComponentCheckbox';
import EditComponentSelect from './EditComponentSelect';
import EditComponentNumberfield from './EditComponentNumberfield';
import EditComponentMultifield from './EditComponentMultifield';

import allFieldsValid from '../../../tools/allFieldsValid';

const EditComponent = ({
  fields,
  updateFieldValue,
  saveEdit,
  closeEdit,
}) => (
  fields ? (
    <>
      <div className="edit-component__backdrop" />
      <div
        className="cq-Dialog _coral-BaseOverlay _coral-Dialog-wrapper cq-dialog-floating is-open"
        backdrop="none"
        variant="default"
        role="dialog"
        closable="off"
        open="open"
        aria-hidden="false"
      >
        <div handle="topTabCapture" coral-tabcapture="top" role="presentation" />
        <div handle="wrapper">
          <div
            className="coral-Form--vertical cq-dialog foundation-form foundation-layout-form _coral-Dialog _coral-Dialog--noBackdrop is-open"
          >
            <div className="_coral-Dialog-header u-coral-openHand" handle="headerWrapper">
              <div className="_coral-Dialog-dragZone" handle="dragZone" />
              <coral-dialog-header className="cq-dialog-header _coral-Dialog-title" id="coral-id-631-add">
                <div className="cq-dialog-actions u-coral-pullRight" />
                Component Properties
              </coral-dialog-header>
            </div>
            <div id="dnd-add-component" className="_coral-Dialog-content">
              <div className="cq-dialog-content">

                <div className="edit-component">
                  {fields.map((field) => (
                    <div
                      className="coral-Form-fieldwrapper"
                      key={field.id}
                    >
                      {/* eslint-disable-next-line no-nested-ternary */}
                      { field.type === constants.fieldTypes.LONG ? (
                        <EditComponentNumberfield
                          id={field.id}
                          label={field.label}
                          value={field.value}
                          isValid={field.isValid}
                          description={field.description}
                          updateFieldValue={updateFieldValue}
                        />
                      ) : (
                        // eslint-disable-next-line no-nested-ternary
                        field.type === constants.fieldTypes.KEY_VALUE ? (
                          <EditComponentMultifield
                            id={field.id}
                            label={field.label}
                            value={field.value}
                            isValid={field.isValid}
                            required={field.required}
                            description={field.description}
                            updateFieldValue={updateFieldValue}
                          />
                        ) : (
                          // eslint-disable-next-line no-nested-ternary
                          field.type === constants.fieldTypes.BOOLEAN ? (
                            <EditComponentCheckbox
                              id={field.id}
                              label={field.label}
                              value={field.value}
                              placeholder={field.placeholder}
                              description={field.description}
                              updateFieldValue={updateFieldValue}
                            />
                          ) : (
                            field.options && field.options.length ? (
                              <EditComponentSelect
                                id={field.id}
                                label={field.label}
                                value={field.value}
                                options={field.options}
                                description={field.description}
                                isValid={field.isValid}
                                required={field.required}
                                updateFieldValue={updateFieldValue}
                              />
                            ) : (
                              <EditComponentTextfield
                                id={field.id}
                                label={field.label}
                                value={field.value}
                                description={field.description}
                                isValid={field.isValid}
                                required={field.required}
                                updateFieldValue={updateFieldValue}
                              />
                            )
                          )
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="_coral-Dialog-footer">
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
                disabled={!allFieldsValid(fields)}
                icon=""
                variant="cta"
                className="_coral-Button _coral-Button--cta"
                title="Save"
                size="M"
                type="button"
                onClick={() => saveEdit()}
              >
                <coral-button-label className="_coral-Button-label">Save</coral-button-label>
              </button>
            </div>
          </div>
        </div>
        <div handle="intermediateTabCapture" coral-tabcapture="intermediate" role="presentation" />
        <div handle="bottomTabCapture" coral-tabcapture="bottom" role="presentation" />
      </div>
    </>
  ) : null
);

EditComponent.propTypes = {
  closeEdit: PropTypes.func.isRequired,
  fields: PropTypes.array,
  saveEdit: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
};

EditComponent.defaultProps = {
  fields: null,
};

export default EditComponent;
