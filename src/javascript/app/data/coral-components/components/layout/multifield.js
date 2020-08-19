/* eslint-disable no-undef */
import constants from '../../constants';

const multifield = {
  name: 'Multifield',
  tag: 'MF',
  category: constants.fieldCategories.LAYOUT.name,
  tagColor: constants.fieldCategories.LAYOUT.color,
  description: '',
  id: 'multifield',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
  ],
  previewOutput: `<div class="_coral-Multifield coral-Well">
    <div class="_coral-Multifield-item">
      <button is="coral-button" type="button" handle="remove" variant="quietaction" icon="delete" iconsize="S" size="M" class="_coral-Multifield-remove" disabled>&nbsp;</button>
      <drop-target data-accept="textfield,hidden,datepicker,checkbox,radio,select,pathbrowser,pathfield" data-name="mf" data-wrap="" />
    </div>
    <button type="button" is="coral-button" disabled>Add a field</button>
  </div>`,
  xmlOutput: `<{id}
      jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/form/multifield"
      composite="{Boolean}true"
      fieldLabel="{label}">
      <field
          jcr:primaryType="nt:unstructured"
          sling:resourceType="granite/ui/components/coral/foundation/container"
          name="./products">
          <items jcr:primaryType="nt:unstructured">
              <column
                  jcr:primaryType="nt:unstructured"
                  sling:resourceType="granite/ui/components/coral/foundation/container">
                  <items jcr:primaryType="nt:unstructured">
                      <drop-target data-accept="textfield,hidden,datepicker,checkbox,radio,select,pathbrowser,pathfield" data-name="mf" />
                  </items>
              </column>
          </items>
      </field>
  </{id}>`,
};

export default multifield;
