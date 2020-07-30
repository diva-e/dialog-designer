const coralConstants = {
  fieldDefinitions: {
    ID: {
      id: 'id',
      label: 'Field Id',
      description: 'Id of the field must start with a letter (can also contain - _ or numbers).',
      type: 'String',
      validation: '^([a-zA-z])+([a-zA-Z0-9-_])*',
      required: true,
    },
    LABEL: {
      id: 'label',
      label: 'Field Label',
      description: '',
      type: 'String',
      required: false,
    },
    REQUIRED: {
      id: 'required',
      label: 'Field will be required',
      description: '',
      type: 'Boolean',
      required: false,
    },
    DESCRIPTION: {
      id: 'description',
      label: 'Field Description',
      description: '',
      type: 'String',
      required: false,
    },
  },
  fieldCategories: {
    STANDARD: 'Standard',
    LAYOUT: 'Layout',
    AUTHORING_HELPER: 'Authoring Helper',
    RESOURCE: 'Resource',
    SELECTION: 'Selection',
  },
};

export default coralConstants;
