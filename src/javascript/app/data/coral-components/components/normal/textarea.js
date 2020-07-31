/* eslint-disable no-undef */
import coralConstants from '../../constants';

const textarea = {
  name: 'Textarea',
  tag: 'TA',
  category: coralConstants.fieldCategories.STANDARD,
  tagColor: coralConstants.fieldCategoryColors.STANDARD,
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
      description: '',
      type: 'Long',
      defaultValue: '5',
      required: false,
    },
    {
      id: 'value',
      label: 'Value',
      description: '',
      type: 'String',
      required: false,
    },
  ],
  creation: 'textarea',
  src: `<div>
    <label
      id="label_{id}"
      class="coral-Form-fieldlabel"
      for="{id}">{label}x</label>
    <textarea
      class="coral-Form-field foundation-layout-util-resizable-none _coral-Textfield _coral-Textfield--multiline"
      name="{id}"
      rows="{rows}"
      labelledby="label_{id}"
      is="coral-textarea"
      value="{value}x"
      aria-labelledby="label_{id}"
      variant="default">{value}x</textarea>
  </div>`,
  xml: `<{id}
     sling:resourceType="granite/ui/components/coral/foundation/form/textarea"
     jcr:primaryType="nt:unstructured"
     name="./{id}"
     value="x{value}"
     fieldLabel="{label}"
     fieldDescription="{description}" />`,
};

export default textarea;
