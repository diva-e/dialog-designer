/* eslint-disable no-undef */
import coralConstants from '../../constants';

const fielupload = {
  name: 'Fileupload',
  tag: 'FU',
  category: coralConstants.fieldCategories.RESOURCE,
  tagColor: coralConstants.fieldCategoryColors.RESOURCE,
  description: 'Fielupload / Image',
  id: 'fileupload',
  fieldWrapperNeeded: true,
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_REQUIRED,
    {
      id: 'title',
      label: 'Title',
      description: '',
      type: 'String',
      required: true,
    },
  ],
  src: `<div
  className="coral-Form-field cq-FileUpload cq-droptarget _coral-FileUpload"
  name="./file" async=""
  data-foundation-validation=""
  accept="image/gif,image/jpeg,image/png,image/tiff,image/svg+xml"
  action=""
  data-cq-fileupload-temporaryfilename="./file.sftmp"
  data-cq-fileupload-temporaryfiledelete="./file.sftmp@Delete"
  data-cq-fileupload-temporaryfilepath=""
  data-cq-fileupload-allowupload=""
  id="{id}">
  <div coral-fileupload-dropzone=""
    className="cq-FileUpload-thumbnail">
    <div
      className="cq-FileUpload-thumbnail-img"
      data-cq-fileupload-thumbnail-img="">
    </div>
    <div
      className="cq-FileUpload-thumbnail-dropHere">
      <div icon="image"
        className="cq-FileUpload-icon _coral-Icon _coral-Icon--sizeS"
        role="img" size="S">
        <svg focusable="false"
          aria-hidden="true"
          className="_coral-Icon--svg _coral-Icon">
          <use
            xlink:href="/dist/resources/spectrum-icons.svg#spectrum-icon-18-Image">
          </use>
        </svg>
      </div>
      <span className="cq-FileUpload-label">
        Drop an asset here or <a
          aria-label="Browse for a file to upload"
          class="coral-Link cq-FileUpload-browse"
          coral-fileupload-select="">browse</a>
        for a file to upload.</span>
    </div>
  </div>
</div>`,
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
    uploadUrl=""
    useHTML5="{Boolean}true"/>`,
};
// todo: find solution for / disable substitution logic
// uploadUrl="${suffix.path}"

export default fielupload;
