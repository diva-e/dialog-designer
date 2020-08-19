/* eslint-disable no-undef */
import constants from '../../constants';

const anchorbutton = {
  name: 'Anchorbutton',
  tag: 'AB',
  category: constants.fieldCategories.AUTHORING_HELPER.name,
  tagColor: constants.fieldCategories.AUTHORING_HELPER.color,
  description: 'Button in different forms / Links',
  id: 'anchorbutton',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
  ],
  /* todo: preview output */
  previewOutput: '<coral-button>{label}</coral-button>',
  xmlOutput: `<{id}
  jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/anchorbutton"
  name="./{id}"
  size="{size}"
  variant="{variant}"
  x-cq-linkchecker="skip"
  target="_blank"
  text="{text}"
  href="javascript:alert('no function')"
  title="{title}"/>`,
};

export default anchorbutton;
