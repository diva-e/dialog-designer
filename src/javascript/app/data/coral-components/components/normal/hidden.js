/* eslint-disable no-undef */
import coralConstants from '../../constants';

const hidden = {
  name: 'Hidden',
  tag: 'Hi',
  category: coralConstants.fieldCategories.STANDARD,
  description: 'Hidden Field',
  id: 'hidden',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
  ],
  /* todo: preview output */
  src: `<input class="_"
    type="hidden"
    name="{id}"
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
