const root = {
  name: 'Root',
  description: 'start adding content from here',
  id: 'root',
  hidden: true,
  src: `<coral-panel selected>
  <coral-panel-content>
    <h4>Start by dragging your components here</h4>
    <droptarget data-accept="coral-tabview,button,textfield,headline" data-name="content" />
  </coral-panel-content>
</coral-panel>`,
  xml: `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root
  xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
  xmlns:granite="http://www.adobe.com/jcr/granite/1.0"
  xmlns:cq="http://www.day.com/jcr/cq/1.0"
  xmlns:jcr="http://www.jcp.org/jcr/1.0"
  xmlns:nt="http://www.jcp.org/jcr/nt/1.0"
  jcr:primaryType="nt:unstructured"
  jcr:title="Button"
  sling:resourceType="cq/gui/components/authoring/dialog">
  <content
    granite:class="cmp-button__editor"
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/container">
    <items jcr:primaryType="nt:unstructured">
      <droptarget data-name="content" />
    </items>
  </content>
</jcr:root>`,
};

export default root;
