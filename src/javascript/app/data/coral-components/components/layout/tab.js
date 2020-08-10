/* eslint-disable no-undef */
import coralConstants from '../../constants';

const tab = {
  name: 'Tab',
  tag: 'Tb',
  category: coralConstants.fieldCategories.LAYOUT,
  tagColor: coralConstants.fieldCategoryColors.LAYOUT,
  description: 'Clickable Tab',
  id: 'tab',
  fields: [
    FIELD_DEFINITION_ID,
    {
      id: 'title',
      label: 'Title',
      description: '',
      type: 'String',
      required: true,
    },
  ],
  src: `<coral-tab>
      <coral-tab-label>
        {title}
      </coral-tab-label>
    </coral-tab>`,
  xml: `<no-dedicated-xml-rendering>
        {title}
    </no-dedicated-xml-rendering>`,
};

export default tab;
