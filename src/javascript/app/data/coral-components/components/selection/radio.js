/* eslint-disable no-undef */
import coralConstants from '../../constants';

const radio = {
  name: 'Radio',
  tag: 'Ra',
  category: coralConstants.fieldCategories.SELECTION,
  tagColor: coralConstants.fieldCategoryColors.SELECTION,
  description: 'Radio Button Field',
  id: 'radio',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
  ],
  /* todo: preview output */
  src: `<input class="_"
    type="text"
    name="{id}"
    id="{id}"
  />`,
  xml: `<{id}
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
