const switchfield = {
  name: 'Switch',
  tag: 'Sw',
  category: 'Selection',
  description: 'Switch / Toggle Field',
  id: 'switchfield',
  src: `<label id="label-{id}" class="coral-Form-fieldlabel">{label}</label>
    <coral-switch class="coral-Form-field" labelledby="label-{id}">
    </coral-switch>`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/switch"
    fieldDescription="{description}"
    fieldLabel="{label}"
    name="./{id}"
    checked="{Boolean}true"
    required="{Boolean:required}"
    value="{value}"/>`,
};

export default switchfield;
