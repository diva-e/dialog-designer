/* eslint-disable no-undef */
import constants from '../../constants';

const switchfield = {
  name: 'Switch',
  tag: 'Sw',
  category: constants.fieldCategories.SELECTION.name,
  tagColor: constants.fieldCategories.SELECTION.color,
  description: 'Switch / Toggle Field',
  id: 'switchfield',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
  ],
  previewOutput: `<div>
      <label id="label-{id}" class="coral-Form-fieldlabel">{label}</label>
      <coral-switch class="coral-Form-field" labelledby="label-{id}"></coral-switch>
    </div>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/switch"
    fieldDescription="{description}"
    fieldLabel="{label}"
    name="./{id}"
    checked="{Boolean}true"
    required="{required}"
    value="{value}"
  />`,
};

export default switchfield;
