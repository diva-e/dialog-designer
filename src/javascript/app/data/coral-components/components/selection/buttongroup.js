import { ButtonGroup } from '@adobe/coral-spectrum';
/* eslint-disable no-undef */
import constants from '../../constants';
import LABEL_TEMPLATE from '../../partials/label';
import TOOLTIP_WRAPPER_TEMPLATE from '../../partials/tooltip';

const buttongroup = {
  name: 'Buttongroup',
  tag: 'BG',
  category: constants.fieldCategories.SELECTION.name,
  tagColor: constants.fieldCategories.SELECTION.color,
  description: 'ButtonGroup',
  id: 'buttongroup',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
    {
      id: 'selectionmode',
      label: 'Selection Mode',
      description: '',
      type: constants.fieldValueTypes.STRING,
      options: [
        {
          value: ButtonGroup.selectionMode.SINGLE,
          caption: 'Single',
        },
        {
          value: ButtonGroup.selectionMode.MULTIPLE,
          caption: 'Multiple',
        },
      ],
      defaultValue: ButtonGroup.selectionMode.SINGLE,
      required: false,
    },
    {
      id: 'buttons',
      label: 'Buttons',
      type: constants.fieldValueTypes.KEY_VALUE,
      renderItem: (value, mode) => {
        if (mode === 'xml-output') {
          return value.map(({ itemId, itemCaption, itemValue }) => (
            `<${itemId} jcr:primaryType="nt:unstructured" text="${itemCaption}" value="${itemValue}" />`
          )).join('');
        }

        return value.map(({ itemId, itemCaption, itemValue }) => (
          `<button is="coral-button" variant="secondary" value="${itemValue}" data-id="${itemId}">${itemCaption}</button>`
        )).join('');
      },
    },
  ],
  previewOutput: `<div>
    ${LABEL_TEMPLATE}
    <coral-buttongroup
      selectionmode="{selectionmode}"
      name="{id}"
    >
      {buttons}
    </coral-buttongroup>
    ${TOOLTIP_WRAPPER_TEMPLATE}
  </div>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/buttongroup"
    name="./{id}"
    fieldLabel="{label}"
    fieldDescription="{description}"
    required="{required}"
    selectionMode="{selectionMode}"
  >
    <items jcr:primaryType="nt:unstructured">
        {buttons}
    </items>
  </{id}>`,
};

export default buttongroup;
