const fielupload = {
  name: 'Fileupload',
  tag: 'FU',
  category: 'Resource',
  description: 'Fielupload / Image',
  id: 'fielupload',
  /* todo: preview output */
  src: `<input class="_"
    type="text"
    name="{id}"
    id="{id}"
  />`,
  xml: `<file
    jcr:primaryType="nt:unstructured"
    sling:resourceType="cq/gui/components/authoring/dialog/fileupload"
    autoStart="{Boolean}false"
    class="cq-droptarget"
    fileNameParameter="./fileName"
    fileReferenceParameter="./fileReference"
    mimeTypes="[image/gif,image/jpeg,image/png,image/tiff,image/svg+xml]"
    multiple="{Boolean}false"
    name="./file"
    title="Upload Image Asset"
    uploadUrl=""
    useHTML5="{Boolean}true"/>`,
};
// todo: find solution for / disable substitution logic
// uploadUrl="${suffix.path}"

export default fielupload;
