import coralConstants from '../../constants';

const tab = {
  name: 'Tab',
  tag: 'Tb',
  category: coralConstants.fieldCategories.LAYOUT,
  description: 'Clickable Tab',
  id: 'tab',
  src: `<coral-tab id={id}>
  <coral-tab-label>
    {label}
  </coral-tab-label>
</coral-tab>`,
  /* todo: xml output */
  xml: '<span>Tab</span>',
};

export default tab;
