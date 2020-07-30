import coralConstants from '../../constants';

const alerthint = {
  name: 'Alert',
  tag: 'Al',
  category: coralConstants.fieldCategories.AUTHORING_HELPER,
  description: 'Helpertext (Hints / Info / Warnings etc.)',
  id: 'alerthint',
  src: `<coral-alert size="{size}" variant="{variant}" id="{id}">
          <coral-alert-header>{header}</coral-alert-header>
          <coral-alert-content>{message}</coral-alert-content>
        </coral-alert>`,
  xml: `<{id}
   granite:class="cmp-form-textfield-readonlyselected-alert"
   jcr:primaryType="nt:unstructured"
   sling:resourceType="granite/ui/components/coral/foundation/alert"
   size="{size}"
   text="{message}"
   variant="{variant}" />`,
};

export default alerthint;
