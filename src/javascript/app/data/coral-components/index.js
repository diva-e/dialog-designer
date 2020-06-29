const coralComponents = [
  {
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
  },
  {
    name: 'Tab',
    description: 'Clickable Tab',
    nodeName: 'coral-tab',
    src: `<coral-tab id={id}>
  <coral-tab-label>
    {label}
  </coral-tab-label>
</coral-tab>`,
  },
  {
    name: 'Tab Content Panel',
    description: 'Tab Panel holding further content',
    nodeName: 'coral-panel',
    src: `<coral-panel aria-labelledby={id}>
  <coral-panel-content>
    <div class="foundation-layout-util-vmargin">
      <div class="coral-FixedColumn foundation-layout-util-vmargin">
        <div class="coral-FixedColumn-column">
          <h4 class="coral-Heading coral-Heading--4">{heading}</h4>
          <div class="coral-Well">
            <droptarget data-accept="*" data-name="content"/>
          </div>
        </div>
      </div>
    </div>
  </coral-panel-content>
</coral-panel>`,
  },
];

export default coralComponents;
