const select = {
  name: 'DropDown',
  tag: 'DD',
  category: 'Selection',
  description: 'Select field',
  id: 'select',
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
        id: 'selectValues',
        label: 'Select Value Pairs',
        description: '',
        type: 'KeyValue',
        required: false,
      },
      {
        id: 'selectDatasource',
        label: 'Select Datasource',
        description: '',
        type: 'String',
        required: false,
      },
  ],
  src: `<label id="label_{id}" class="coral-Form-fieldlabel">{label}</label>
  <coral-select placeholder="Choose an item" name="{id}" id="{id}">
          <coral-select-item>
            Africa
          </coral-select-item>
          <coral-select-item>
            America
          </coral-select-item>
          <coral-select-item>
            Asia
          </coral-select-item>
          <coral-select-item>
            Europe
          </coral-select-item>
          <coral-select-item>
            Oceania
          </coral-select-item>
        </coral-select>
  <div class="coral-Form-fieldwrapper">
  xxx
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
