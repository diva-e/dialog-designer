import coralConstants from '../../constants';

const alerthint = {
  name: 'Alert',
  tag: 'Al',
  category: coralConstants.fieldCategories.AUTHORING_HELPER,
  description: 'Helpertext (Hints / Info / Warnings etc.)',
  id: 'alerthint',
  fields: [
    coralConstants.fieldDefinitions.ID,
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
    // {
    //   id: 'size',
    //   label: 'Size',
    //   description: '',
    //   type: 'String',
    //   options: [
    //     Coral.Alert.size.SMALL,
    //     Coral.Alert.size.LARGE,
    //   ],
    //   defaultValue: Coral.Alert.size.SMALL,
    //   required: false,
    // },
    {
      id: 'variant',
      label: 'Variant',
      description: '',
      type: 'String',
      options: [
        {
          value: Coral.Alert.variant.ERROR,
          caption: 'Error',
        },
        {
          value: Coral.Alert.variant.WARNING,
          caption: 'Warning',
        },
        {
          value: Coral.Alert.variant.SUCCESS,
          caption: 'Success',
        },
        {
          value: Coral.Alert.variant.HELP,
          caption: 'Help',
        },
        {
          value: Coral.Alert.variant.INFO,
          caption: 'Info',
        },
      ],
      defaultValue: Coral.Alert.variant.INFO,
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
