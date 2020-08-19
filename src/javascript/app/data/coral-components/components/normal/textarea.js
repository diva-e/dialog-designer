/* eslint-disable no-undef */
import constants from '../../constants';

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
      type: 'Long',
      defaultValue: '5',
      min: 2,
      max: 100,
      step: 1,
    },
    {
      id: 'value',
      label: 'Value',
      type: 'String',
    },
  ],
  creation: 'textarea',
  previewOutput: `<div>
    <label
      id="label_{id}"
      class="coral-Form-fieldlabel"
      for="{id}">{label}</label>
    <textarea
      class="coral-Form-field foundation-layout-util-resizable-none _coral-Textfield _coral-Textfield--multiline"
      name="{id}"
      rows="{rows}"
      labelledby="label_{id}"
      is="coral-textarea"
      value="{value}"
      aria-labelledby="label_{id}"
      variant="default">{value}</textarea>
  </div>`,
  xmlOutput: `<{id}
     sling:resourceType="granite/ui/components/coral/foundation/form/textarea"
     jcr:primaryType="nt:unstructured"
     name="./{id}"
     value="{value}"
     fieldLabel="{label}"
     fieldDescription="{description}" />`,
};

export default textarea;
