/* eslint-disable no-undef */
import coralConstants from '../../constants';

const tabView = {
  name: 'Tab View',
  tag: 'TV',
  category: coralConstants.fieldCategories.LAYOUT,
  tagColor: coralConstants.fieldCategoryColors.LAYOUT,
  description: 'Switchable tabs with multiple panels',
  id: 'tabview',
  fields: [
    FIELD_DEFINITION_ID,
  ],
  src: `<coral-tabview>
    <coral-tablist target="{id}">
      <droptarget data-accept="tab" data-name="tabs" />
    </coral-tablist>
    <coral-panelstack id="{id}">
      <adapt data-from="tabs" data-to="panel" />
    </coral-panelstack>
  </coral-tabview>`,
  /* todo: xml output */
  xml: `<span>
tabview
</span>`,
};

export default tabView;
