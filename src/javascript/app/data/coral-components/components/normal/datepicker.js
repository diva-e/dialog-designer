const datepicker = {
  name: 'Datepicker',
  tag: 'DP',
  category: 'Standard',
  description: 'Datepicker Field',
  id: 'datepicker',
  src: `<input class="_"
    type="text"
    name="{id}"
    id="{id}"
  />`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/datepicker"
    displayedFormat="MM-DD-YYYY HH:mm"
    fieldLabel="{label}"
    name="./{id}"
    type="datetime"
    typeHint="Date"/>`,
};

export default datepicker;
