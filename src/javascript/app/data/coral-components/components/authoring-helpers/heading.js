const heading = {
  name: 'Heading',
  tag: 'He',
  category: 'Authoring Helper',
  description: 'Headline',
  id: 'heading',
  src: `<input class="_"
    type="text"
    name="{id}"
    id="{id}"
    value=""
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

export default heading;
