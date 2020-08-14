import { ButtonGroup } from '@adobe/coral-spectrum';
/* eslint-disable no-undef */
import constants from '../../constants';

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
      type: 'String',
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
  ],
  src: `<div>
        <label
          id="label_{id}"
          class="coral-Form-fieldlabel"
          for="{id}">{label}</label>
          <coral-buttongroup
      selectionmode="{selectionmode}"
      name="{id}">
        <button is="coral-button" variant="secondary">One</button>
        <button is="coral-button" variant="secondary">Two</button>
        <button is="coral-button" variant="secondary">Three</button>
      </coral-buttongroup>
    </div>`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    name="./{id}"
    fieldLabel="{label}"
    required="{required}"
    selectionMode="{selectionMode}"
    sling:resourceType="granite/ui/components/coral/foundation/form/buttongroup">
    <items jcr:primaryType="nt:unstructured">
        <one jcr:primaryType="nt:unstructured"
            name="./one"
            text="One"
            value="one" />
        <two jcr:primaryType="nt:unstructured"
            name="./two"
            text="Two"
            value="two" />
        <three jcr:primaryType="nt:unstructured"
            name="./three"
            text="Option three"
            value="three" />
    </items>
</{id}>`,
};

// todo: anti sample it
export default buttongroup;
