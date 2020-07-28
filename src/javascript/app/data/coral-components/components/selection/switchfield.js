const switchfield = {
  name: 'Switch',
  tag: 'Sw',
  category: 'Selection',
  description: 'Switch / Toggle Field',
  id: 'switchfield',
  src: `<div class="coral-Form-fieldwrapper">
            <label id="label-{id}" class="coral-Form-fieldlabel">{label}</label>
            <coral-switch class="coral-Form-field" labelledby="label-{id}">
            </coral-switch>
          </div>`,
  xml: `<{id}
  jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/hidden"
  fieldDescription="{label}"
  fieldLabel="{label}"
  name="./{id}"
  required="{Boolean:required}"
  value="{value}"/>`,
};

export default switchfield;
