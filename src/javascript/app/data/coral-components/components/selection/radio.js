/* eslint-disable no-undef */
import constants from '../../constants';
import TOOLTIP_WRAPPER_TEMPLATE from '../../partials/tooltip';
import LABEL_TEMPLATE from '../../partials/label';

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
      type: constants.fieldTypes.KEY_VALUE,
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
    ${LABEL_TEMPLATE}
    {radiobuttons}
    ${TOOLTIP_WRAPPER_TEMPLATE}
  </div>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/radiogroup"
    name="./{id}"
    fieldLabel="{label}"
    fieldDescription="{description}"
    vertical="{Boolean}true"
  >
     <items jcr:primaryType="nt:unstructured">
         {radiobuttons}
     </items>
  </{id}>`,
};

export default radio;
