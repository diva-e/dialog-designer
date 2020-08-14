/* eslint-disable no-undef */
import constants from '../../constants';

const tab = {
  name: 'Tab',
  tag: 'Tb',
  category: constants.fieldCategories.LAYOUT.name,
  tagColor: constants.fieldCategories.LAYOUT.color,
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
  xml: `<{id}
        jcr:primaryType="nt:unstructured"
        jcr:title="{title}"
        sling:resourceType="granite/ui/components/foundation/section">
        <layout
            jcr:primaryType="nt:unstructured"
            sling:resourceType="granite/ui/components/foundation/layouts/fixedcolumns"
            margin="{Boolean}false"/>
        <items jcr:primaryType="nt:unstructured">
            <column
                jcr:primaryType="nt:unstructured"
                sling:resourceType="granite/ui/components/foundation/container">
                <items jcr:primaryType="nt:unstructured">
                     <drop-target data-accept="fieldset,datepicker,hidden,numberfield,richtext,textarea,textfield,buttongroup,checkbox,radio,select,switchfield,fileupload,pathbrowser,pathfield,alerthint,anchorbutton,heading," data-name="tabcontent" />
                </items>
            </column>
        </items>
    </{id}>`,
};

export default tab;
