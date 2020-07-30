const fieldset = {
  name: 'Fieldset',
  tag: 'FS',
  category: 'Layout',
  description: 'Fieldset',
  id: 'fieldset',
  /* todo: include sub dropzone */
  src: `<section class="coral-Form-fieldset">
      <h3
        class="coral-Form-fieldset-legend">
        {title}</h3>
        <!-- other fields here -->
    </section>`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/fieldset"
    jcr:title="{title}"
    >
      <items jcr:primaryType="nt:unstructured">
        <!-- other fields here -->
      </items>
    </{id}>`,
};

export default fieldset;
