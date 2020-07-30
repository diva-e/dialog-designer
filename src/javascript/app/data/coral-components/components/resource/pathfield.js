const pathfield = {
  name: 'Pathfield',
  tag: 'PF',
  category: 'Resource',
  description: 'Path Field',
  id: 'pathfield',
  /* todo: preview output */
  src: `<input class="_"
    type="text"
    name="{id}"
    id="{id}"
  />`,
  xml: `<{id}
   jcr:primaryType="nt:unstructured"
   sling:resourceType="granite/ui/components/coral/foundation/form/pathfield"
   fieldLabel="{label}"
   name="./{id}"
   rootPath="{rootPath}}"
   suffix="{suffix}"/>`,
};

export default pathfield;
