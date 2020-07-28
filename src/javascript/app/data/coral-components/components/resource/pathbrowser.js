const pathbrowser = {
  name: 'Pathbrowser',
  tag: 'PB',
  category: 'Resource',
  description: 'Pathbrowser Field',
  id: 'pathbrowser',
  src: `<input class="_"
    type="text"
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

export default pathbrowser;
