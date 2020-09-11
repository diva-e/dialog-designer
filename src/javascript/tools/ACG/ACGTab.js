import ACGHelper from './ACGHelper';

class ACGTab {
  constructor(id = '', label = '') {
    this.id = id;
    this.label = label;
    this.fields = [];
  }

  addField(acgField) {
    this.fields.push(acgField.field);
  }

  fill(structureField) {
    structureField.properties.forEach((structureFieldData) => {
      if (ACGHelper.isInACGTabPropertyMap(structureFieldData.id)) {
        // eslint-disable-next-line no-undef
        this[ACG_TAB_PROPERTY_MAP[structureFieldData.id]] = structureFieldData.value;
      }
    });
  }
}

export default ACGTab;
