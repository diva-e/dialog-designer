const textfield = {
  name: 'Textfield',
  tag: 'TF',
  category: 'Standard',
  description: 'Textfield for entering text',
  id: 'textfield',
  config: [
    {
      id: 'id',
      label: 'Id',
      description: '',
      type: 'String',
      required: true,
    },
    {
      id: 'label',
      label: 'Label',
      description: '',
      type: 'String',
      required: false,
    },
    {
      id: 'required',
      label: 'Required',
      description: '',
      type: 'Boolean',
      required: false,
    },
    {
      id: 'description',
      label: 'Description',
      description: '',
      type: 'String',
      required: false,
    },
  ],
  src: `<div className="coral-Form-fieldwrapper">
  <label id="label_{id}" class="coral-Form-fieldlabel">{label}</label>
  <input className="coral-Form-field _coral-Textfield"
    type="text"
    name="{id}"
    labelledby="label_{id}"
    data-foundation-validation=""
    data-validation=""
    is="coral-textfield"
    id="{id}"
    aria-labelledby="{id}"
    variant="default"
  />
  </div>`,
  xml: `<{id}
  jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
  fieldDescription="{label}"
  fieldLabel="{label}"
  name="./{id}"
  required="{Boolean:required}"
  value="{value}"/>`,
};

export default textfield;

/*       <coral-icon class="coral-Form-fieldinfo _coral-Icon _coral-Icon--sizeS" icon="infoCircle" tabindex="0" alt="description" role="img" aria-label="description" size="S">
             <svg focusable="false" aria-hidden="true" class="_coral-Icon--svg _coral-Icon">
                 <use xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-Info"></use>
             </svg>
         </coral-icon>
         <coral-tooltip target="_prev" placement="left" id="description_14e88f18-d857-47ac-b6f4-4359d261f315" x-placement="right" x-out-of-boundaries="" class="_coral-Overlay _coral-Tooltip _coral-Tooltip--default _coral-Tooltip--right" role="tooltip" tabindex="-1" variant="default" style="position: absolute; will-change: transform; display: none; top: 0px; left: 0px; transform: translate3d(-5px, 0px, 0px);">

             <span class=" _coral-Tooltip-tip" handle="tip"></span>
             <coral-tooltip-content class="_coral-Tooltip-label">HTML ID attribute to apply to the component.</coral-tooltip-content>
         </coral-tooltip>

         */