/* eslint-disable lines-between-class-members,padding-line-between-statements */
import constants from '../../app/data/coral-components/constants';
import ACGItem from './ACGItem';
import ACGHelper from './ACGHelper';

class ACGField {
  constructor(type = 'hidden', id = '') {
    this.field = id;
    this.type = type;
    this.jsonExposure = true;
    this.attributes = {};
    this.items = [];
    this.label = null;
    this.modelName = null;
    this.useExistingModel = null;
    this.jsonProperty = null;
    this.javadoc = null;
  }

  getACGObjectNotation() {
    const aCGObject = {
      field: this.field,
      type: this.type,
      'json-expose': this.jsonExposure,
      attributes: this.attributes,
    };

    if (this.label) {
      aCGObject.label = this.label;
    }

    if (this.modelName) {
      aCGObject.modelName = this.modelName;
    }

    if (this.useExistingModel) {
      aCGObject.useExistingModel = this.useExistingModel;
    }

    if (this.jsonProperty) {
      aCGObject.jsonProperty = this.jsonProperty;
    }

    if (this.javadoc) {
      aCGObject.javadoc = this.javadoc;
    }

    return aCGObject;
  }

  addItem(acgItem) {
    this.items.push(acgItem);
  }

  fill(structureField) {
    this.type = structureField.type;
    structureField.properties.forEach((structureFieldData) => {
      if (ACGHelper.isInACGMainFieldPropertyMap(structureFieldData.id)) {
        // eslint-disable-next-line no-undef
        this[ACG_MAIN_FIELD_PROPERTY_MAP[structureFieldData.id]] = structureFieldData.value;
      } else {
        switch (structureFieldData.type) {
          case constants.fieldValueTypes.BOOLEAN:
            if (structureFieldData.value !== '' || typeof structureFieldData.value === 'undefined') {
              this.attributes[structureFieldData.id] = `{Boolean}${structureFieldData.value.toString()}`;
            }
            break;
          case constants.fieldValueTypes.KEY_VALUE:
            this.items = [];
            structureFieldData.value.forEach((fieldItem) => {
              this.items.push(new ACGItem(fieldItem));
            });

            break;
          default:
            this.attributes[structureFieldData.id] = structureFieldData.value;
        }
      }
    });
  }
}

export default ACGField;
