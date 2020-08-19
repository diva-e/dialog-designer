/* eslint-disable no-undef */
import { Alert } from '@adobe/coral-spectrum';
import constants from '../../constants';

const alerthint = {
  name: 'Alert',
  tag: 'Al',
  category: constants.fieldCategories.AUTHORING_HELPER.name,
  tagColor: constants.fieldCategories.AUTHORING_HELPER.color,
  description: 'Helpertext (Hints / Info / Warnings etc.)',
  id: 'alerthint',
  fields: [
    FIELD_DEFINITION_ID,
    {
      id: 'header',
      label: 'Headertext',
      description: '',
      type: constants.fieldTypes.STRING,
      required: true,
    },
    {
      id: 'message',
      label: 'Message',
      description: '',
      type: constants.fieldTypes.STRING,
      required: true,
    },
    {
      id: 'size',
      label: 'Size',
      description: '',
      type: constants.fieldTypes.STRING,
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
      type: constants.fieldTypes.STRING,
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
  previewOutput: `<coral-alert size="{size}" variant="{variant}" id="{id}">
    <coral-alert-header>{header}</coral-alert-header>
    <coral-alert-content>{message}</coral-alert-content>
  </coral-alert>`,
  xmlOutput: `<{id}
    granite:class="cmp-form-textfield-readonlyselected-alert"
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/alert"
    size="{size}"
    text="{message}"
    variant="{variant}"
  />`,
};

export default alerthint;
