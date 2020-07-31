/* eslint-disable no-undef */
import coralConstants from '../../constants';

const panel = {
  name: 'Content Panel',
  tag: 'CP',
  category: coralConstants.fieldCategories.LAYOUT,
  tagColor: coralConstants.fieldCategoryColors.LAYOUT,
  description: 'Panel holding further content (e.g. for tabs)',
  id: 'panel',
  fields: [
    FIELD_DEFINITION_ID,
    {
      id: 'heading',
      label: 'Headline',
      description: '',
      type: 'String',
      required: true,
    },
  ],
  src: `<coral-panel aria-labelledby={id} selected>
  <coral-panel-content>
    <div class="foundation-layout-util-vmargin">
      <div class="coral-FixedColumn foundation-layout-util-vmargin">
        <div class="coral-FixedColumn-column">
          <h4 class="coral-Heading coral-Heading--4">{heading}</h4>
          <div class="coral-Well">
            <droptarget data-accept="coral-tabview,button,textfield" data-name="content"/>
          </div>
        </div>
      </div>
    </div>
  </coral-panel-content>
</coral-panel>`,
  xml: ' <droptarget data-name="content"/>',
};

export default panel;
