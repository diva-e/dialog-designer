/* eslint-disable no-undef */
import coralConstants from '../../constants';

const richtext = {
  name: 'Richtext',
  tag: 'RT',
  category: coralConstants.fieldCategories.STANDARD,
  tagColor: coralConstants.fieldCategoryColors.STANDARD,
  description: 'RTE Field',
  id: 'richtext',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
  ],
  /* todo: preview output */
  src: `<input class="_"
    type="text"
    name="{id}"
    id="{id}"
  />`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="cq/gui/components/authoring/dialog/richtext"
    fieldDescription="{label}"
    fieldLabel="{label}"
    name="./{id}" />`,
};

export default richtext;
