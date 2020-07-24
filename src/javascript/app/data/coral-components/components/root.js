const root = {
  name: 'Root',
  description: 'start adding content from here',
  id: 'root',
  hidden: true,
  src: `<coral-dialog-preview class="cq-Dialog coral3-Dialog coral3-Dialog--backdropNone cq-dialog-floating is-open" backdrop="none" aria-hidden="false" closable="off" role="dialog" open="">
    <div class="coral3-Dialog-wrapper" style="{{ position: 'absolute', left: '300px', width: '500px', top: '100px', 'height': '500px' }}">
      <form class="form-preview coral-Form--vertical cq-dialog foundation-form foundation-layout-form">
        <div class="coral3-Dialog-header">
          <coral-icon class="coral3-Icon coral3-Dialog-typeIcon coral3-Icon--sizeS" icon="" size="S" handle="icon"></coral-icon>
          <div handle="headerContent" class=" coral3-Dialog-title coral-Heading coral-Heading--2" role="heading" aria-level="2">
            <coral-dialog-header class="cq-dialog-header">
              <div class="cq-dialog-actions u-coral-pullRight">
              </div>
              Dialog Preview
            </coral-dialog-header>
          </div>
        </div>
        <div class="cq-dialog-content">
          <br/>
          <h4>Start by dragging your components here</h4>
          <br/>
          <droptarget data-accept="coral-tabview,button,textfield,headline" data-name="content" />
          <br/>
        </div>
      </form>
    </div>
  </coral-dialog>`,
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
