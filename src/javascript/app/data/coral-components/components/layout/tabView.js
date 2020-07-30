/* eslint-disable no-undef */
import coralConstants from '../../constants';

const tabView = {
  name: 'Tab View',
  tag: 'TV',
  category: coralConstants.fieldCategories.LAYOUT,
  description: 'Switchable tabs with multiple panels',
  id: 'tabview',
  fields: [
    FIELD_DEFINITION_ID,
  ],
  src: `<coral-tabview>
    <coral-tablist target="#{id}">
      <droptarget data-accept="coral-tab" data-name="tabs"/>
    </coral-tablist>
    <coral-panelstack id="{id}">
      <droptarget data-accept="coral-panel" data-name="panels"/>
    </coral-panelstack>
  </coral-tabview>`,
  /* todo: xml output */
  xml: `
<droptarget data-name="tabs"/>
<droptarget data-name="panels"/>
`,
};

export default tabView;
