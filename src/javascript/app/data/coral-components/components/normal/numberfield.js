/* eslint-disable no-undef */
import constants from '../../constants';
import LABEL_TEMPLATE from '../../partials/label';
import TOOLTIP_WRAPPER_TEMPLATE from '../../partials/tooltip';

const numberfield = {
  name: 'Numberfield',
  tag: 'NF',
  category: constants.fieldCategories.STANDARD.name,
  tagColor: constants.fieldCategories.STANDARD.color,
  description: 'Number Field',
  id: 'numberfield',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
    {
      id: 'min',
      label: 'Min',
      description: '',
      type: constants.fieldTypes.LONG,
      required: false,
    },
    {
      id: 'max',
      label: 'Max',
      description: '',
      type: constants.fieldTypes.LONG,
      required: false,
    },
    {
      id: 'step',
      label: 'Step',
      description: '',
      type: constants.fieldTypes.LONG,
      required: false,
    },
  ],
  previewOutput: `<div>
    ${LABEL_TEMPLATE}
    <coral-numberinput
      max={max}
      min={min}
      step={step}
      name={id}>
    </coral-numberinput>
    ${TOOLTIP_WRAPPER_TEMPLATE}
    </div>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/numberfield"
    name="./{id}"
    fieldLabel="{label}"
    fieldDescription="{description}"
    min="{min}"
    max="{max}"
    step="{step}"
  />`,
};

export default numberfield;
