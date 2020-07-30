const numberfield = {
  name: 'Numberfield',
  tag: 'NF',
  category: 'Standard',
  description: 'Number Field',
  id: 'numberfield',
  /* todo: preview output */
  src: `<input class="_"
    type="text"
    name="{id}"
    id="{id}"
  />`,
  xml: `<{id}
         granite:class="cq-AspectRatio-ratio"
         jcr:primaryType="nt:unstructured"
         sling:resourceType="granite/ui/components/coral/foundation/form/numberfield"
         fieldLabel="{label}"
         min="{minValue}"
         max="{minValue}"
         name="ratio"
         step="{step}" />`,
};

export default numberfield;
