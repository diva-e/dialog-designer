module.exports = {
  FILED_DEFINITION_ID: {
    id: 'id',
    label: 'Field Id',
    description: 'Id of the field must start with a letter (can also contain - _ or numbers).',
    type: 'String',
    validation: '^([a-zA-z])+([a-zA-Z0-9-_])*',
    required: true,
  },
  FILED_DEFINITION_LABEL: {
    id: 'label',
    label: 'Field Label',
    description: '',
    type: 'String',
    required: false,
  },
  FILED_DEFINITION_REQUIRED: {
    id: 'required',
    label: 'Field will be required',
    description: '',
    type: 'Boolean',
    required: false,
  },
  FILED_DEFINITION_DESCRIPTION: {
    id: 'description',
    label: 'Field Description',
    description: '',
    type: 'String',
    required: false,
  },
};
