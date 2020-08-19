/* eslint-disable no-undef */
import constants from '../../constants';

const fieldset = {
  name: 'Fieldset',
  tag: 'FS',
  category: constants.fieldCategories.LAYOUT.name,
  tagColor: constants.fieldCategories.LAYOUT.color,
  description: 'Fieldset',
  id: 'fieldset',
  fields: [
    FIELD_DEFINITION_ID,
    {
      id: 'title',
      label: 'Title',
      description: '',
      type: 'String',
      required: true,
    },
  ],
  previewOutput: `<section class="coral-Form-fieldset">
      <h3
        class="coral-Form-fieldset-legend">
        {title}</h3>
         <drop-target data-accept="datepicker,hidden,numberfield,richtext,textarea,textfield,buttongroup,checkbox,radio,select,switchfield,fileupload,pathbrowser,pathfield,alerthint,anchorbutton,heading," data-name="content" />
    </section>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/fieldset"
    jcr:title="{title}"
    >
      <items jcr:primaryType="nt:unstructured">
        <!-- other fields here -->
        <drop-target data-name="content" />
      </items>
    </{id}>`,
};

export default fieldset;
