/* eslint-disable no-undef */
import coralConstants from '../../constants';

const hidden = {
  name: 'Hidden',
  tag: 'Hi',
  category: coralConstants.fieldCategories.STANDARD,
  tagColor: coralConstants.fieldCategoryColors.STANDARD,
  description: 'Hidden Field',
  id: 'hidden',
  fields: [
    FIELD_DEFINITION_ID,
    {
      id: 'value',
      label: 'Value',
      description: '',
      type: 'String',
      required: false,
    },
  ],
  /* todo: preview output */
  src: `<input class="disabled"
    type="text"
    name="{id}"
    value="{value}"
    disabled="true"
    id="{id}"
  />`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/hidden"
    fieldDescription="{label}"
    fieldLabel="{label}"
    name="./{id}"
    required="{required}"
    value="{value}"/>`,
};

export default hidden;
