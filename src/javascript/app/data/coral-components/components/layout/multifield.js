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
  previewOutput: `<div>
    <coral-multifield>
      <coral-multifield-item>
        <drop-target data-accept="textfield,hidden,datepicker,checkbox,radio,select,pathbrowser,pathfield" data-name="mf" data-wrap=""/>
      </coral-multifield-item>
      <button coral-multifield-add type="button" is="coral-button" disabled>Add a field</button>
      <template coral-multifield-template>
      </template>
    </coral-multifield>
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

/*

<products
                        jcr:primaryType="nt:unstructured"
                        sling:resourceType="granite/ui/components/coral/foundation/form/multifield"
                        composite="{Boolean}true"
                        eaem-show-on-collapse="EAEM.showProductName"
                        fieldLabel="Products">
                        <field
                            jcr:primaryType="nt:unstructured"
                            sling:resourceType="granite/ui/components/coral/foundation/container"
                            name="./products">
                            <items jcr:primaryType="nt:unstructured">
                                <column
                                    jcr:primaryType="nt:unstructured"
                                    sling:resourceType="granite/ui/components/coral/foundation/container">
                                    <items jcr:primaryType="nt:unstructured">
                                        <product
                                            jcr:primaryType="nt:unstructured"
                                            sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
                                            fieldDescription="Name of Product"
                                            fieldLabel="Product Name"
                                            name="./product"/>
                                        <path
                                            jcr:primaryType="nt:unstructured"
                                            sling:resourceType="granite/ui/components/coral/foundation/form/pathbrowser"
                                            fieldDescription="Select Path"
                                            fieldLabel="Path"
                                            name="./pathbr"
                                            rootPath="/content"/>
                                        <startDate
                                            jcr:primaryType="nt:unstructured"
                                            sling:resourceType="granite/ui/components/coral/foundation/form/datepicker"
                                            class="field"
                                            displayedFormat="YYYY-MM-DD HH:mm"
                                            fieldLabel="Start Date"
                                            name="./startDate"
                                            type="datetime"/>
                                        <show
                                            jcr:primaryType="nt:unstructured"
                                            sling:resourceType="granite/ui/components/coral/foundation/form/checkbox"
                                            name="./show"
                                            text="Show?"
                                            value="yes"/>
                                        <type
                                            jcr:primaryType="nt:unstructured"
                                            sling:resourceType="granite/ui/components/coral/foundation/form/select"
                                            fieldDescription="Select Size"
                                            fieldLabel="Size"
                                            name="./size">
                                            <items jcr:primaryType="nt:unstructured">
                                                <def
                                                    jcr:primaryType="nt:unstructured"
                                                    text="Select Size"
                                                    value=""/>
                                                <small
                                                    jcr:primaryType="nt:unstructured"
                                                    text="Small"
                                                    value="small"/>
                                                <medium
                                                    jcr:primaryType="nt:unstructured"
                                                    text="Medium"
                                                    value="medium"/>
                                                <large
                                                    jcr:primaryType="nt:unstructured"
                                                    text="Large"
                                                    value="large"/>
                                            </items>
                                        </type>
                                        <fruits
                                            jcr:primaryType="nt:unstructured"
                                            sling:resourceType="granite/ui/components/coral/foundation/form/radiogroup"
                                            name="./fruit"
                                            required="{Boolean}true"
                                            text="Fruit">
                                            <items jcr:primaryType="nt:unstructured">
                                                <apple
                                                    jcr:primaryType="nt:unstructured"
                                                    sling:resourceType="granite/ui/components/coral/foundation/form/radio"
                                                    text="apple"
                                                    value="apple"/>
                                                <orange
                                                    jcr:primaryType="nt:unstructured"
                                                    sling:resourceType="granite/ui/components/coral/foundation/form/radio"
                                                    text="orange"
                                                    value="orange"/>
                                                <pear
                                                    jcr:primaryType="nt:unstructured"
                                                    sling:resourceType="granite/ui/components/coral/foundation/form/radio"
                                                    text="pear"
                                                    value="pear"/>
                                            </items>
                                        </fruits>
                                    </items>
                                </column>
                            </items>
                        </field>
                    </products>

 */
