const hidden = {
  name: 'Hidden',
  tag: 'Hi',
  category: 'Standard',
  description: 'Hidden Field',
  id: 'hidden',
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
