/* eslint-disable no-undef */
import { Button } from '@adobe/coral-spectrum';
import constants from '../../constants';

const anchorbutton = {
  name: 'Anchorbutton',
  tag: 'AB',
  category: constants.fieldCategories.AUTHORING_HELPER.name,
  tagColor: constants.fieldCategories.AUTHORING_HELPER.color,
  description: 'Button in different forms / Links',
  id: 'anchorbutton',
  fields: [
    FIELD_DEFINITION_ID,
    {
      id: 'caption',
      label: 'Caption',
      description: '',
      type: constants.fieldTypes.STRING,
      required: true,
    },
    {
      id: 'title',
      label: 'Title',
      description: '',
      type: constants.fieldTypes.STRING,
      required: true,
    },
    {
      id: 'href',
      label: 'HRef',
      description: '',
      type: constants.fieldTypes.STRING,
      required: true,
    },
    {
      id: 'variant',
      label: 'Variant',
      description: '',
      type: constants.fieldTypes.STRING,
      options: [
        {
          value: Button.variant.PRIMARY,
          caption: 'Primary',
        },
        {
          value: Button.variant.WARNING,
          caption: 'Warning',
        },
        {
          value: Button.variant.MINIMAL,
          caption: 'Minimal',
        },
      ],
    },
    {
      id: 'size',
      label: 'Size',
      description: '',
      type: constants.fieldTypes.STRING,
      options: [
        {
          value: Button.size.MEDIUM,
          caption: 'Medium',
        },
        {
          value: Button.size.LARGE,
          caption: 'Large',
        },
      ],
      defaultValue: Button.size.MEDIUM,
      required: false,
    },
  ],
  /* todo: preview output */
  previewOutput: '<coral-button>{title}</coral-button>',
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/anchorbutton"
    name="./{id}"
    size="{size}"
    variant="{variant}"
    target="_blank"
    text="{caption}"
    href="{href}"
    title="{title}"
    x-cq-linkchecker="skip"
  />`,
};

export default anchorbutton;
