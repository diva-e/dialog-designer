/* eslint-disable no-undef */
import constants from '../../constants';

const tabView = {
  name: 'Tab View',
  tag: 'TV',
  category: constants.fieldCategories.LAYOUT.name,
  tagColor: constants.fieldCategories.LAYOUT.color,
  description: 'Switchable tabs with multiple panels',
  id: 'tabview',
  fields: [
    FIELD_DEFINITION_ID,
  ],
  src: `<coral-tabview title="tt" data-horst="horst">
    <coral-tablist target="{id}">
      <drop-target data-accept="tab" data-name="tabs" data-wrap="coral-tab"/>
    </coral-tablist>
    <coral-panelstack id="{id}">
      <adapt data-from="tabs" data-to="panel" />
    </coral-panelstack>
  </coral-tabview>`,
  xml: `<content
        jcr:primaryType="nt:unstructured"
        sling:resourceType="granite/ui/components/foundation/container">
        <layout
            jcr:primaryType="nt:unstructured"
            sling:resourceType="granite/ui/components/foundation/layouts/tabs"
            type="nav"/>
        <items jcr:primaryType="nt:unstructured">
            <drop-target data-accept="tab" data-name="tabs" />
        </items>
    </content>`,
};

export default tabView;
