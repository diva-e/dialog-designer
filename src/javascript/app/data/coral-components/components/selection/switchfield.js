/* eslint-disable no-undef */
import coralConstants from '../../constants';

const switchfield = {
  name: 'Switch',
  tag: 'Sw',
  category: coralConstants.fieldCategories.SELECTION,
  tagColor: coralConstants.fieldCategoryColors.SELECTION,
  description: 'Switch / Toggle Field',
  id: 'switchfield',
  fieldWrapperNeeded: true,
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
  ],
  src: `<div>
      <label id="label-{id}" class="coral-Form-fieldlabel">{label}</label>
      <coral-switch class="coral-Form-field" labelledby="label-{id}"></coral-switch>
    </div>`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/switch"
    fieldDescription="{description}"
    fieldLabel="{label}"
    name="./{id}"
    checked="{Boolean}true"
    required="{required}"
    value="{value}"/>`,
};

export default switchfield;
