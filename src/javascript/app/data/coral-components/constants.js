const constants = {
  fieldCategories: {
    STANDARD: {
      name: 'Standard',
      color: 'green',
    },
    LAYOUT: {
      name: 'Layout',
      color: 'orange',
    },
    AUTHORING_HELPER: {
      name: 'Authoring Helper',
      color: 'yellow',
    },
    RESOURCE: {
      name: 'Resource',
      color: 'lightblue',
    },
    SELECTION: {
      name: 'Selection',
      color: 'fuchsia',
    },
    CUSTOM: {
      name: 'Custom',
      color: 'red',
    },
  },
  fieldTypes: {
    STRING: 'String',
    BOOLEAN: 'Boolean',
    LONG: 'Long',
    KEY_VALUE: 'KeyValue',
  },
  messages: {
    DELETE_CONFIRM: 'Proceeding here will delete the currently selected field component',
    PURGE_CONFIRM: 'Proceeding here will completely reset the current dialog.',
  },
};

export default constants;
