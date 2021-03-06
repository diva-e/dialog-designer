/* eslint-disable no-undef */
import constants from '../../constants';

const hidden = {
  name: 'Hidden',
  tag: 'Hi',
  category: constants.fieldCategories.STANDARD.name,
  tagColor: constants.fieldCategories.STANDARD.color,
  description: 'Hidden Field',
  id: 'hidden',
  fields: [
    FIELD_DEFINITION_ID,
    {
      id: 'value',
      label: 'Value',
      description: '',
      type: constants.fieldValueTypes.STRING,
      required: false,
    },
  ],
  previewOutput: `<input class="disabled"
    type="text"
    name="{id}"
    value="{value}"
    disabled="true"
    id="{id}"
  />`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/hidden"
    name="./{id}"
    value="{value}"
  />`,
};

export default hidden;
