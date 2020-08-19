/* eslint-disable no-undef */
import constants from '../../constants';

const textfield = {
  name: 'Textfield',
  tag: 'TF',
  category: constants.fieldCategories.STANDARD.name,
  tagColor: constants.fieldCategories.STANDARD.color,
  description: 'Textfield for entering text',
  id: 'textfield',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
  ],
  previewOutput: `<div>
      <label id="label_{id}" class="coral-Form-fieldlabel">{label}</label>
      <input className="coral-Form-field _coral-Textfield"
        type="text"
        name="{id}"
        labelledby="label_{id}"
        is="coral-textfield"
        id="{id}"
        aria-labelledby="label_{id}"
        variant="default"
      />
  </div>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
    fieldDescription="{label}"
    fieldLabel="{label}"
    name="./{id}"
    required="{required}"
    value="" />`,
};

export default textfield;

// todo: implement general tooltip support for fieldDescription
/*
 <coral-icon class="coral-Form-fieldinfo _coral-Icon _coral-Icon--sizeS" icon="infoCircle" tabindex="0" alt="description" role="img" aria-label="description" size="S">
     <svg focusable="false" aria-hidden="true" class="_coral-Icon--svg _coral-Icon">
         <use xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-Info"></use>
     </svg>
 </coral-icon>
 <coral-tooltip target="_prev" placement="left" id="description_14e88f18-d857-47ac-b6f4-4359d261f315" x-placement="right" x-out-of-boundaries="" class="_coral-Overlay _coral-Tooltip _coral-Tooltip--default _coral-Tooltip--right" role="tooltip" tabindex="-1" variant="default" style="position: absolute; will-change: transform; display: none; top: 0px; left: 0px; transform: translate3d(-5px, 0px, 0px);">
     <span class=" _coral-Tooltip-tip" handle="tip"></span>
     <coral-tooltip-content class="_coral-Tooltip-label">HTML ID attribute to apply to the component.</coral-tooltip-content>
 </coral-tooltip>
*/
