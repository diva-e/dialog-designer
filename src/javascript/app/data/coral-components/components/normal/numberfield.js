const numberfield = {
  name: 'Numberfield',
  tag: 'NF',
  category: 'Standard',
  description: 'Number Field',
  id: 'numberfield',
  src: `<input class="_"
    type="text"
    name="{id}"
    id="{id}"
  />`,
  xml: `<{id}
  jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
  fieldDescription="{label}"
  fieldLabel="{label}"
  name="./{id}"
  required="{Boolean:required}"
  value="{value}"/>`,
};

export default numberfield;
