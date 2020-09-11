/* eslint-disable no-undef */
import constants from '../../constants';
import LABEL_TEMPLATE from '../../partials/label';
import TOOLTIP_WRAPPER_TEMPLATE from '../../partials/tooltip';

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
      ${LABEL_TEMPLATE}
      <coral-switch class="coral-Form-field" labelledby="label-{id}"></coral-switch>
      ${TOOLTIP_WRAPPER_TEMPLATE}
    </div>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/switch"
    data-optional.fieldDescription="{description}"
    data-optional.fieldLabel="{label}"
    name="./{id}"
    checked="{Boolean}true"
    data-optional.required="{required}"
    value="{value}"
  />`,
};

export default switchfield;
