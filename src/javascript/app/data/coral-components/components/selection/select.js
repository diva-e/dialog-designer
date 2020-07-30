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
  src: `<div>
      <label id="label_{id}" class="coral-Form-fieldlabel">{label}</label>
      <coral-select placeholder="{placeholder}" name="{id}" id="{id}">
        <coral-select-item>
          Value One
        </coral-select-item>
        <coral-select-item>
          Value Two
        </coral-select-item>
        <coral-select-item>
          Value Three
        </coral-select-item>
      </coral-select>
    </div>`,
  xml: `<{id}
   granite:class="cmp-options--editor-type-v1"
   jcr:primaryType="nt:unstructured"
   sling:resourceType="granite/ui/components/coral/foundation/form/select"
   fieldLabel="{label}"
   name="./{id}">
   <items jcr:primaryType="nt:unstructured">
       <valueOne
           jcr:primaryType="nt:unstructured"
           text="Value One"
           value="one"/>
       <valueTwo
           jcr:primaryType="nt:unstructured"
           text="Value Two"
           value="two"/>
       <valueThree
           jcr:primaryType="nt:unstructured"
           text="Value Three"
           value="tree"/>
   </items>
</{id}>`,
};

// todo: anti sample it

// todo: allow alternative datasource (instead of static options)
/*
<datasource
   jcr:primaryType="nt:unstructured"
   sling:resourceType="{datasource}"
/>
 */

export default select;
