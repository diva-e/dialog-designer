import coralConstants from '../../constants';

const heading = {
  name: 'Heading',
  tag: 'He',
  category: coralConstants.fieldCategories.AUTHORING_HELPER,
  description: 'Headline',
  id: 'heading',
  config: [
    {
      id: 'id',
      label: 'Field Id',
      description: 'Id of the field must start with a letter (can also contain - _ or numbers).',
      type: 'String',
      validation: '^([a-zA-z])+([a-zA-Z0-9-_])*',
      required: true,
    },
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
      typeOptions: ['1', '2', '3', '4', '5', '6'],
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
