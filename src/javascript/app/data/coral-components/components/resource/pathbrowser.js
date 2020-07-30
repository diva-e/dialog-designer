const pathbrowser = {
  name: 'Pathbrowser',
  tag: 'PB',
  category: 'Resource',
  description: 'Pathbrowser Field',
  id: 'pathbrowser',
  /* todo: preview output */
  src: `<input class="_"
    type="text"
    name="{id}"
    id="{id}"
  />`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/pathbrowser"
    fieldLabel="{label}"
    name="./{id}"
    rootPath="{rootPath}" />`,
};

export default pathbrowser;
