/* eslint-disable no-undef */
import coralConstants from '../../constants';

const heading = {
  name: 'Heading',
  tag: 'He',
  category: coralConstants.fieldCategories.AUTHORING_HELPER,
  tagColor: coralConstants.fieldCategoryColors.AUTHORING_HELPER,
  description: 'Headline',
  id: 'heading',
  fieldWrapperNeeded: true,
  fields: [
    FIELD_DEFINITION_ID,
    {
      id: 'text',
      label: 'Headline text',
      description: '',
      type: 'String',
      required: true,
    },
    {
      id: 'level',
      label: 'Level of the Headline (1-6)',
      description: '',
      type: 'Long',
      typeOptions: [
        {
          value: '1',
          caption: '1',
        },
        {
          value: '2',
          caption: '2',
        },
        {
          value: '3',
          caption: '3',
        },
        {
          value: '4',
          caption: '4',
        },
        {
          value: '5',
          caption: '5',
        },
        {
          value: '6',
          caption: '6',
        },
      ],
      defaultValue: '4',
      required: true,
    },
  ],
  src: `<h{level} id="{id}">
        {text}
    </h{level}>`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/heading"
    level="{level}"
    text="{text}"/>`,
};

export default heading;
