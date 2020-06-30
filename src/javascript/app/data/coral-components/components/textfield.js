const textfield = {
  name: 'Textfield',
  description: 'Textfield for entering text',
  id: 'textfield',
  src: `<div class="coral-Form-fieldwrapper">
    <label class="coral-Form-fieldlabel" id="{id}">{label}</label>
    <input class="coral-Form-field" name="name" labelledby="{id}">
  </div>`,
  xml: `<{id}
  jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
  fieldDescription="{label}"
  fieldLabel="{label}"
  name="./{id}"/>`,
};

export default textfield;
