/* eslint-disable no-undef */
import coralConstants from '../../constants';

const pathbrowser = {
  name: 'Pathbrowser',
  tag: 'PB',
  category: coralConstants.fieldCategories.RESOURCE,
  description: 'Pathbrowser Field',
  id: 'pathbrowser',
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
    sling:resourceType="granite/ui/components/coral/foundation/form/pathbrowser"
    fieldLabel="{label}"
    name="./{id}"
    rootPath="{rootPath}" />`,
};

export default pathbrowser;
