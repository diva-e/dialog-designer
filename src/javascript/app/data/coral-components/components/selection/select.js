/* eslint-disable no-undef */
import coralConstants from '../../constants';

const select = {
  name: 'DropDown',
  tag: 'DD',
  category: coralConstants.fieldCategories.SELECTION,
  description: 'Select field',
  id: 'select',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
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
