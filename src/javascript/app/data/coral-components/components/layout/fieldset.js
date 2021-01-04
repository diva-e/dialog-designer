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
      type: constants.fieldValueTypes.STRING,
      required: true,
    },
  ],
  previewOutput: `<section class="coral-Form-fieldset">
      <h3
        class="coral-Form-fieldset-legend">
        {title}</h3>
         <drop-target data-name="fscontent" />
    </section>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/fieldset"
    jcr:title="{title}">
      <items jcr:primaryType="nt:unstructured">
        <drop-target data-name="fscontent" />
      </items>
  </{id}>`,
};

export default fieldset;
