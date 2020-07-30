const tabView = {
  name: 'Tab View',
  tag: 'TV',
  category: 'Layout',
  description: 'Switchable tabs with multiple panels',
  id: 'tabview',
  src: `<coral-tabview>
  <coral-tablist target="#{id}">
    <droptarget data-accept="coral-tab" data-name="tabs"/>
  </coral-tablist>
  <coral-panelstack id="{id}">
    <droptarget data-accept="coral-panel" data-name="panels"/>
  </coral-panelstack>
</coral-tabview>`,
  /* todo: xml output */
  xml: '<p>tabs</p>',
};

export default tabView;
