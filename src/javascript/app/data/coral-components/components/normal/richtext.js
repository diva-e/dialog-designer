const richtext = {
  name: 'Richtext',
  tag: 'RT',
  category: 'Standard',
  description: 'RTE Field',
  id: 'richtext',
  src: `<input class="_"
    type="text"
    name="{id}"
    id="{id}"
  />`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="cq/gui/components/authoring/dialog/richtext"
    fieldDescription="{label}"
    fieldLabel="{label}"
    name="./{id}" />`,
};

export default richtext;
