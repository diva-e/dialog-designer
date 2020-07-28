const select = {
  name: 'DropDown',
  tag: 'DD',
  category: 'Selection',
  description: 'Textfield for entering text',
  id: 'textfield',
  src: `<div class="coral-Form-fieldwrapper">
  <label id="label_{id}" class="coral-Form-fieldlabel">{label}</label>
  <input class="coral-Form-field _coral-Textfield"
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

export default select;
