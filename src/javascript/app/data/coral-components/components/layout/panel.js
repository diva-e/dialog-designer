/* eslint-disable no-undef */
import coralConstants from '../../constants';

const panel = {
  name: 'Tab Panel',
  tag: 'TP',
  category: coralConstants.fieldCategories.LAYOUT,
  tagColor: coralConstants.fieldCategoryColors.LAYOUT,
  description: 'Tab Panel',
  id: 'panel',
  hidden: true,
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
  src: `<coral-panel selected>
  <coral-panel-content>
    <div class="foundation-layout-util-vmargin">
      <div class="coral-FixedColumn foundation-layout-util-vmargin">
        <div class="coral-FixedColumn-column">
          <div class="coral-Well">
             <droptarget data-accept="fieldset,datepicker,hidden,numberfield,richtext,textarea,textfield,buttongroup,checkbox,radio,select,switchfield,fileupload,pathbrowser,pathfield,alerthint,anchorbutton,heading," data-name="tabcontent" />
          </div>
        </div>
      </div>
    </div>
  </coral-panel-content>
</coral-panel>`,
  xml: '<!-- comment -->',
};

export default panel;
