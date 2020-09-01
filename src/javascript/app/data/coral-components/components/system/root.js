const root = {
  name: 'Root',
  tag: 'Rt',
  category: 'System',
  description: '',
  id: 'root',
  hidden: true,
  fields: [],
  previewOutput: `<coral-dialog-preview class="cq-Dialog _coral-BaseOverlay _coral-Dialog-wrapper cq-dialog-floating is-open" backdrop="none" variant="default" role="dialog" closable="off" open="open" aria-hidden="false" movable="false">
    <div handle="wrapper">
      <div class="coral-Form--vertical cq-dialog foundation-form foundation-layout-form _coral-Dialog _coral-Dialog--noBackdrop is-open">
        <div class="_coral-Dialog-header u-coral-openHand" handle="headerWrapper">
          <div class=" _coral-Dialog-dragZone" handle="dragZone"></div>
          <coral-dialog-header class="cq-dialog-header _coral-Dialog-title">
            <div class="cq-dialog-actions u-coral-pullRight"></div>
            Dialog Preview
          </coral-dialog-header>
        </div>
        <coral-dialog-content id="dialog-preview-content" class="_coral-Dialog-content">
          <div class="cq-dialog-content">
            <drop-target data-accept="helloworld,trophyfield,multifield,fieldset,panel,tabview,datepicker,hidden,numberfield,richtext,textarea,textfield,buttongroup,checkbox,radio,select,switchfield,fileupload,pathfield,alerthint,anchorbutton,heading," data-name="content" />
          </div>
        </coral-dialog-content>
        <coral-dialog-footer class="_coral-Dialog-footer">
        </coral-dialog-footer>
      </div>
    </div>
  </coral-dialog-preview>`,
  xmlOutput: `<?xml version="1.0" encoding="UTF-8"?>
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
        <drop-target data-name="content" />
      </items>
    </content>
  </jcr:root>`,
};

export default root;
