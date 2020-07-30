const radio = {
  name: 'Radio',
  tag: 'Ra',
  category: 'Selection',
  description: 'Radio Button Field',
  id: 'radio',
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
