/* eslint-disable no-undef */
import constants from '../../constants';
import TOOLTIP_WRAPPER_TEMPLATE from '../../partials/tooltip';
import LABEL_TEMPLATE from '../../partials/label';

const textarea = {
  name: 'Textarea',
  tag: 'TA',
  category: constants.fieldCategories.STANDARD.name,
  tagColor: constants.fieldCategories.STANDARD.color,
  description: 'Textarea',
  id: 'textarea',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
    {
      id: 'rows',
      label: 'Rows',
      description: 'Number of lines for the textarea to show.',
      type: constants.fieldValueTypes.LONG,
      defaultValue: '5',
      min: 2,
      max: 100,
      step: 1,
    },
    {
      id: 'value',
      label: 'Value',
      type: constants.fieldValueTypes.STRING,
    },
  ],
  creation: 'textarea',
  previewOutput: `<div>
    ${LABEL_TEMPLATE}
    <textarea
      class="coral-Form-field foundation-layout-util-resizable-none _coral-Textfield _coral-Textfield--multiline"
      name="{id}"
      rows="{rows}"
      labelledby="label_{id}"
      is="coral-textarea"
      value="{value}"
      aria-labelledby="label_{id}"
      variant="default">{value}</textarea>
    ${TOOLTIP_WRAPPER_TEMPLATE}
  </div>`,
  xmlOutput: `<{id}
    sling:resourceType="granite/ui/components/coral/foundation/form/textarea"
    jcr:primaryType="nt:unstructured"
    name="./{id}"
    data-optional.fieldLabel="{label}"
    data-optional.fieldDescription="{description}"
    value="{value}"
  />`,
};

export default textarea;
