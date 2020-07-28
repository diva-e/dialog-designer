const alerthint = {
  name: 'Alert',
  tag: 'Al',
  category: 'Authoring Helper',
  description: 'Helpertext (Hints / Info / Warnings etc.)',
  id: 'alerthint',
  src: `<coral-alert size="{size}" variant="{variant}">
          <coral-alert-header>{header}</coral-alert-header>
          <coral-alert-content>{message}</coral-alert-content>
        </coral-alert>`,
  xml: `<{id}
  jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
  fieldDescription="{label}"
  fieldLabel="{label}"
  name="./{id}"
  required="{Boolean:required}"
  value="{value}"/>`,
};

export default alerthint;
