/* eslint-disable no-undef */
import constants from '../../constants';

const radio = {
  name: 'Radio',
  tag: 'Ra',
  category: constants.fieldCategories.SELECTION.name,
  tagColor: constants.fieldCategories.SELECTION.color,
  description: 'Radio Button Field',
  id: 'radio',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
  ],
  previewOutput: `<div>
    <label
      id="label_{id}"
      class="coral-Form-fieldlabel"
      for="{id}">{label}</label>
      <coral-radio
        name={id}
        value="one">Option One</coral-radio>
      <coral-radio
        name={id}
        value="two">Option Two</coral-radio>
    </div>`,
  xmlOutput: `<{id}
   jcr:primaryType="nt:unstructured"
   sling:resourceType="granite/ui/components/coral/foundation/form/radiogroup"
   name="./{id}"
   vertical="{Boolean}true"
   fieldLabel="Radio">
     <items jcr:primaryType="nt:unstructured">
         <optionOne
             jcr:primaryType="nt:unstructured"
             text="Option One"
             value="one"/>
         <optionTwo
            jcr:primaryType="nt:unstructured"
            text="Option Two"
            value="two"/>
     </items>
   </{id}>`,
};

// todo: anti sample it

export default radio;
