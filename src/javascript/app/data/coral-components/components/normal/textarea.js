const textarea = {
  name: 'Textarea',
  tag: 'TA',
  category: 'Standard',
  description: 'Textarea',
  id: 'textarea',
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
      {
        id: 'rows',
        label: 'Rows',
        description: '',
        type: 'String',
        required: false,
      },
      {
        id: 'value',
        label: 'Value',
        description: '',
        type: 'String',
        required: false,
      },
  ],
  creation: 'textarea',
  src: `<div
          class="coral-Form-fieldwrapper foundation-field-edit">
          <label
            id="label_{id}"
            class="coral-Form-fieldlabel"
            for="{id}">{label}</label>
          <textarea
            class="coral-Form-field foundation-layout-util-resizable-none _coral-Textfield _coral-Textfield--multiline"
            name="{id}"
            rows="{rows}"
            labelledby="label_{id}"
            data-foundation-validation=""
            data-validation=""
            is="coral-textarea" id="coral-id-24"
            aria-labelledby="label_{id}"
            variant="default">{value}</textarea>
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

export default textarea;
