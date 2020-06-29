const tabPanel = {
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
            <droptarget data-accept="coral-tabview" data-name="content"/>
          </div>
        </div>
      </div>
    </div>
  </coral-panel-content>
</coral-panel>`,
};

export default tabPanel;
