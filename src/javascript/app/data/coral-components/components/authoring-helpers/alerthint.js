const alerthint = {
  name: 'Alert',
  tag: 'Al',
  category: 'Authoring Helper',
  description: 'Helpertext (Hints / Info / Warnings etc.)',
  id: 'alerthint',
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

export default alerthint;
