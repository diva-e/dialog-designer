/* eslint-disable no-undef */
import constants from '../../constants';

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
      type: 'String',
    },
    {
      id: 'options',
      label: 'Options',
      type: 'KeyValue',
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
      type: 'String',
    },
  ],
  previewOutput: `<div>
      <label
        id="label_{id}"
        class="coral-Form-fieldlabel"
      >
        {label}
      </label>
      <coral-select
        name="{id}"
        id="{id}"
        placeholder="{placeholder}"
      >
        {options}
      </coral-select>
    </div>`,
  xmlOutput: `<{id}
   granite:class="cmp-options--editor-type-v1"
   jcr:primaryType="nt:unstructured"
   sling:resourceType="granite/ui/components/coral/foundation/form/select"
   fieldLabel="{label}"
   name="./{id}">
   <items jcr:primaryType="nt:unstructured">
       {options}
   </items>
</{id}>`,
};

// todo: anti sample it

// todo: allow alternative datasource (instead of static options)
/*
<datasource
   jcr:primaryType="nt:unstructured"
   sling:resourceType="{datasource}"
/>
 */

export default select;
