/* eslint-disable no-undef */
import coralConstants from '../../constants';

const panel = {
  name: 'Tab Panel',
  tag: 'TP',
  category: coralConstants.fieldCategories.LAYOUT,
  tagColor: coralConstants.fieldCategoryColors.LAYOUT,
  description: 'Tab Panel',
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
  src: `<coral-panel aria-labelledby={id}>
  <coral-panel-content>
    <div class="foundation-layout-util-vmargin">
      <div class="coral-FixedColumn foundation-layout-util-vmargin">
        <div class="coral-FixedColumn-column">
          <h4 class="coral-Heading coral-Heading--4">{heading}</h4>
          <div class="coral-Well">
             <droptarget data-accept="fieldset,datepicker,hidden,numberfield,richtext,textarea,textfield,buttongroup,checkbox,radio,select,switchfield,fileupload,pathbrowser,pathfield,alerthint,anchorbutton,heading," data-name="tabcontent" />
          </div>
        </div>
      </div>
    </div>
  </coral-panel-content>
</coral-panel>`,
  xml: ' <droptarget data-name="tabcontent"/>',
};

export default panel;
