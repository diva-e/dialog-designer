module.exports = {
  FIELD_DEFINITION_ID: {
    id: 'id',
    label: 'Field Id',
    description: 'Id of the field must start with a letter (can also contain - _ or numbers).',
    type: 'String',
    validation: '^([a-zA-z])+([a-zA-Z0-9-_])*',
    required: true,
    uniqueAutoValue: true,
  },
  FIELD_DEFINITION_LABEL: {
    id: 'label',
    label: 'Field Label',
    description: '',
    type: 'String',
    required: false,
  },
  FIELD_DEFINITION_REQUIRED: {
    id: 'required',
    label: 'Field is required',
    description: '',
    type: 'Boolean',
    required: false,
  },
  FIELD_DEFINITION_DESCRIPTION: {
    id: 'description',
    label: 'Field Description',
    description: '',
    type: 'String',
    required: false,
  },
};
