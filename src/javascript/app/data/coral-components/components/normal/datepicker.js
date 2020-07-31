/* eslint-disable no-undef */
import coralConstants from '../../constants';

const datepicker = {
  name: 'Datepicker',
  tag: 'DP',
  category: coralConstants.fieldCategories.STANDARD,
  tagColor: coralConstants.fieldCategoryColors.STANDARD,
  description: 'Datepicker Field',
  id: 'datepicker',
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
    sling:resourceType="granite/ui/components/coral/foundation/form/datepicker"
    displayedFormat="MM-DD-YYYY HH:mm"
    fieldLabel="{label}"
    name="./{id}"
    type="datetime"
    typeHint="Date"/>`,
};

export default datepicker;
