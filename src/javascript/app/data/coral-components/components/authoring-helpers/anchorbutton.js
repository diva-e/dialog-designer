/* eslint-disable no-undef */
import coralConstants from '../../constants';

const anchorbutton = {
  name: 'Anchorbutton',
  tag: 'AB',
  category: coralConstants.fieldCategories.AUTHORING_HELPER,
  tagColor: coralConstants.fieldCategoryColors.AUTHORING_HELPER,
  description: 'Button in different forms / Links',
  id: 'anchorbutton',
  fieldWrapperNeeded: true,
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
  ],
  // createNode: {
  //   is: 'coral-button',
  //   creator: () => (
  //     Coral.Button()
  //   ),
  // },
  /* todo: preview output */
  src: '<coral-button>{label}</coral-button>',
  xml: `<{id}
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
