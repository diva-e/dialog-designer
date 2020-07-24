const root = {
  name: 'Root',
  description: 'start adding content from here',
  id: 'root',
  hidden: true,
  src: `<coral-dialog class="cq-Dialog coral3-Dialog coral3-Dialog--backdropNone cq-dialog-floating is-open" backdrop="none" aria-hidden="false" closable="off" role="dialog" open="">
    <div class="coral3-Dialog-wrapper" style="{{ position: 'absolute', left: '50%', 'margin-left': '-295px', width: '590px', top: '50%', 'margin-top': '-280px' }}">
      <form class="form-preview coral-Form--vertical cq-dialog foundation-form foundation-layout-form">
        <div class="coral3-Dialog-header u-coral-openHand">
          <coral-icon class="coral3-Icon coral3-Dialog-typeIcon coral3-Icon--sizeS" icon="" size="S" handle="icon"></coral-icon>
          <div handle="headerContent" class=" coral3-Dialog-title coral-Heading coral-Heading--2" role="heading" aria-level="2">
            <coral-dialog-header class="cq-dialog-header">
              <div class="cq-dialog-actions u-coral-pullRight">
                <button is="coral-button" icon="helpCircle" variant="minimal" type="button" class="cq-dialog-header-action cq-dialog-help coral3-Button coral3-Button--minimal" data-href="https://www.adobe.com/go/aem_cmp_title_v2" title="Help" size="M">
                  <coral-icon class="coral3-Icon coral3-Icon--sizeS coral3-Icon--helpCircle" icon="helpCircle" size="S" role="img" aria-label="help circle"></coral-icon>
                  <coral-button-label></coral-button-label>
                </button>
                <button is="coral-button" icon="fullScreen" variant="minimal" class="cq-dialog-header-action cq-dialog-layouttoggle coral3-Button coral3-Button--minimal" type="button" title="Toggle Fullscreen" size="M">
                  <coral-icon class="coral3-Icon coral3-Icon--sizeS coral3-Icon--fullScreen" icon="fullScreen" size="S" role="img" aria-label="full screen"></coral-icon>
                  <coral-button-label></coral-button-label>
                </button>
                <button is="coral-button" type="button" icon="close" variant="minimal" class="cq-dialog-header-action cq-dialog-cancel coral3-Button coral3-Button--minimal" title="Cancel" size="M">
                  <coral-icon class="coral3-Icon coral3-Icon--sizeS coral3-Icon--close" icon="close" size="S" role="img" aria-label="close"></coral-icon>
                  <coral-button-label></coral-button-label>
                </button>
                <button is="coral-button" icon="check" variant="minimal" class="cq-dialog-header-action cq-dialog-submit coral3-Button coral3-Button--minimal" title="Done" size="M">
                  <coral-icon class="coral3-Icon coral3-Icon--sizeS coral3-Icon--check" icon="check" size="S" role="img" aria-label="check"></coral-icon>
                  <coral-button-label></coral-button-label>
                </button>
              </div>
              Title
            </coral-dialog-header>
          </div>
          <button is="coral-button" class="coral3-Button coral3-Dialog-closeButton coral3-Button--minimal" size="M" variant="minimal" tracking="off" handle="closeButton" type="button" icon="close" iconsize="XS" title="Close" tabindex="-1" coral-close="" style="{{ display: 'none' }}">
            <coral-icon class="coral3-Icon coral3-Icon--close coral3-Icon--sizeXS" icon="close" size="XS" role="img" aria-label="close"></coral-icon>
            <coral-button-label></coral-button-label>
          </button>
        </div>
        <div class="cq-dialog-content">
          <h4>Start by dragging your components here</h4>
          <droptarget data-accept="coral-tabview,button,textfield,headline" data-name="content" />
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
