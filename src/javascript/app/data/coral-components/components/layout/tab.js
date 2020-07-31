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
    FIELD_DEFINITION_LABEL,
  ],
  src: `<coral-tab>
  <coral-tab-label>
    {label}
  </coral-tab-label>
</coral-tab>`,
  /* todo: xml output */
  xml: '<span>{label}</span>',
};

export default tab;
