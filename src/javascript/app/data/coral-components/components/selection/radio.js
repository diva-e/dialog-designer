/* eslint-disable no-undef */
import constants from '../../constants';

const radio = {
  name: 'Radio',
  tag: 'Ra',
  category: constants.fieldCategories.SELECTION.name,
  tagColor: constants.fieldCategories.SELECTION.color,
  description: 'Radio Button Field',
  id: 'radio',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
    {
      id: 'radiobuttons',
      label: 'Radiobuttons',
      type: 'KeyValue',
      renderItem: (value, mode) => {
        if (mode === 'xml-output') {
          return value.map(({ itemId, itemCaption, itemValue }) => (
            `<${itemId} jcr:primaryType="nt:unstructured" text="${itemCaption}" value="${itemValue}" />`
          )).join('');
        }

        return value.map(({ itemId, itemCaption, itemValue }) => (
          `<coral-radio name="${itemId}" value="${itemValue}">${itemCaption}</coral-radio>`
        )).join('');
      },
    },
  ],
  previewOutput: `<div>
    <label
      id="label_{id}"
      class="coral-Form-fieldlabel"
      for="{id}">{label}</label>
      {radiobuttons}
    </div>`,
  xmlOutput: `<{id}
   jcr:primaryType="nt:unstructured"
   sling:resourceType="granite/ui/components/coral/foundation/form/radiogroup"
   name="./{id}"
   vertical="{Boolean}true"
   fieldLabel="Radio">
     <items jcr:primaryType="nt:unstructured">
         {radiobuttons}
     </items>
   </{id}>`,
};

// todo: anti sample it

export default radio;
