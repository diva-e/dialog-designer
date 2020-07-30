import coralConstants from '../../constants';

const hidden = {
  name: 'Hidden',
  tag: 'Hi',
  category: coralConstants.fieldCategories.STANDARD,
  description: 'Hidden Field',
  id: 'hidden',
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
    required="{Boolean:required}"
    value="{value}"/>`,
};

export default hidden;
