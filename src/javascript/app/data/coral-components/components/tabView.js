const tabView = {
  name: 'Tab View',
  description: 'Switchable tabs with multiple panels',
  nodeName: 'coral-tabview',
  src: `<coral-tabview>
  <coral-tablist target="#{id}">
    <droptarget data-accept="coral-tab" data-name="tabs"/>
  </coral-tablist>
  <coral-panelstack id="{id}">
    <droptarget data-accept="coral-panel" data-name="panels"/>
  </coral-panelstack>
</coral-tabview>`,
};

export default tabView;
