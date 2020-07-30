const buttongroup = {
  name: 'Buttongroup',
  tag: 'BG',
  category: 'Selection',
  description: 'ButtonGroup',
  id: 'buttongroup',
  /* todo: preview output */
  src: `<input class="_"
    type="text"
    name="{id}"
    id="{id}"
  />`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    name="./{id}"
    fieldLabel="{label}"
    required="{Boolean:required}"
    selectionMode="{selectionMode}"
    sling:resourceType="granite/ui/components/coral/foundation/form/buttongroup">
    <items jcr:primaryType="nt:unstructured">
        <left jcr:primaryType="nt:unstructured"
            name="./one"
            text="One"
            value="one" />
        <center jcr:primaryType="nt:unstructured"
            name="./two"
            text="Two"
            value="two" />
        <right jcr:primaryType="nt:unstructured"
            name="./three"
            text="Option three"
            value="three" />
    </items>
</{id}>`,
};

// todo: anti sample it
export default buttongroup;
