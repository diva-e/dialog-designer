/* eslint-disable no-undef */
import { Alert } from '@adobe/coral-spectrum';
import coralConstants from '../../constants';

const alerthint = {
  name: 'Alert',
  tag: 'Al',
  category: coralConstants.fieldCategories.AUTHORING_HELPER,
  tagColor: coralConstants.fieldCategoryColors.AUTHORING_HELPER,
  description: 'Helpertext (Hints / Info / Warnings etc.)',
  id: 'alerthint',
  fieldWrapperNeeded: false,
  fields: [
    FIELD_DEFINITION_ID,
    {
      id: 'header',
      label: 'Headertext',
      description: '',
      type: 'String',
      required: true,
    },
    {
      id: 'message',
      label: 'Message',
      description: '',
      type: 'String',
      required: true,
    },
    {
      id: 'size',
      label: 'Size',
      description: '',
      type: 'String',
      options: [
        {
          value: Alert.size.SMALL,
          caption: 'Small',
        },
        {
          value: Alert.size.LARGE,
          caption: 'Large',
        },
      ],
      defaultValue: Alert.size.SMALL,
      required: false,
    },
    {
      id: 'variant',
      label: 'Variant',
      description: '',
      type: 'String',
      options: [
        {
          value: Alert.variant.ERROR,
          caption: 'Error',
        },
        {
          value: Alert.variant.WARNING,
          caption: 'Warning',
        },
        {
          value: Alert.variant.SUCCESS,
          caption: 'Success',
        },
        {
          value: Alert.variant.HELP,
          caption: 'Help',
        },
        {
          value: Alert.variant.INFO,
          caption: 'Info',
        },
      ],
      defaultValue: Alert.variant.INFO,
      required: false,
    },
  ],
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
