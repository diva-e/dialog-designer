/* eslint-disable no-undef */
import constants from '../../constants';
import LABEL_TEMPLATE from '../../partials/label';
import TOOLTIP_WRAPPER_TEMPLATE from '../../partials/tooltip';

const select = {
  name: 'Select',
  tag: 'Se',
  category: constants.fieldCategories.SELECTION.name,
  tagColor: constants.fieldCategories.SELECTION.color,
  description: 'Select field',
  id: 'select',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
    {
      id: 'placeholder',
      label: 'Placeholder',
      type: constants.fieldValueTypes.STRING,
    },
    {
      id: 'options',
      label: 'Options',
      type: constants.fieldValueTypes.KEY_VALUE,
      renderItem: (value, mode) => {
        if (mode === 'xml-output') {
          return value.map(({ itemId, itemCaption, itemValue }) => (
            `<${itemId} jcr:primaryType="nt:unstructured" text="${itemCaption}" value="${itemValue}" />`
          )).join('');
        }

        return value.map(({ itemId, itemCaption, itemValue }) => (
          `<coral-select-item value="${itemValue}" data-id="${itemId}">${itemCaption}</coral-select-item>`
        )).join('');
      },
      // samples for single output with template string only
      // todo: not sure if this will be actually useful maybe remove feature (structureToDom structureToXML)
      // renderItemString: ({ itemId, itemValue, itemCaption }) => `<${itemId} jcr:primaryType="nt:unstructured" text="${itemCaption}" value="${itemValue}" />`,
      // renderItemString: ({ itemId, itemValue, itemCaption }) => `<coral-select-item value="${itemValue}" data-id="${itemId}">${itemCaption}</coral-select-item>`,
    },
    {
      id: 'selectDatasource',
      label: 'Select Datasource',
      type: constants.fieldValueTypes.STRING,
    },
  ],
  previewOutput: `<div>
      ${LABEL_TEMPLATE}
      <coral-select
        name="{id}"
        id="{id}"
        placeholder="{placeholder}"
      >
        {options}
      </coral-select>
      ${TOOLTIP_WRAPPER_TEMPLATE}
    </div>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/select"
    data-optional.fieldLabel="{label}"
    data-optional.fieldDescription="{description}"
    data-optional.required="{required}"
    name="./{id}">
    <items jcr:primaryType="nt:unstructured">
       {options}
    </items>
  </{id}>`,
};

// todo: allow alternative datasource (instead of static options)
/*
<datasource
   jcr:primaryType="nt:unstructured"
   sling:resourceType="{datasource}"
/>
 */

export default select;
