/* eslint-disable no-undef */
import constants from '../../constants';
import TOOLTIP_WRAPPER_TEMPLATE from '../../partials/tooltip';
import LABEL_TEMPLATE from '../../partials/label';

const textfield = {
  name: 'Textfield',
  tag: 'TF',
  category: constants.fieldCategories.STANDARD.name,
  tagColor: constants.fieldCategories.STANDARD.color,
  description: 'Textfield for entering text',
  id: 'textfield',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
  ],
  previewOutput: `<div>
      ${LABEL_TEMPLATE}
      <input
        className="coral-Form-field _coral-Textfield"
        type="text"
        name="{id}"
        labelledby="label_{id}"
        is="coral-textfield"
        id="{id}"
        aria-labelledby="label_{id}"
        variant="default"
      />
      ${TOOLTIP_WRAPPER_TEMPLATE}
  </div>`,
  xmlOutput: `<abc><{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="/apps/components/dialogfields/helloworld"
    fieldDescription="{description}"
    fieldLabel="{label}"
    name="./{id}"
    required="{required}"
    value=""
  />
  <xxx data-test="{description}">test</xxx>
  </abc>`,
};

export default textfield;
