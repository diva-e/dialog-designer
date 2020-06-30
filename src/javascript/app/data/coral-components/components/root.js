const root = {
  name: 'Root',
  description: 'start adding content from here',
  id: 'root',
  hidden: true,
  src: `<coral-panel selected>
  <coral-panel-content>
    <h4>Start by dragging your components here</h4>
    <droptarget data-accept="coral-tabview,button,textfield" data-name="content"/>
  </coral-panel-content>
</coral-panel>`,
};

export default root;
