import constants from '../../app/data/coral-components/constants';

class ACGHelper {
  static isInACGMainFieldPropertyMap(fieldNameToCheck) {
    // eslint-disable-next-line no-undef
    return Object.keys(ACG_MAIN_FIELD_PROPERTY_MAP).includes(fieldNameToCheck);
  }

  static isInACGTabPropertyMap(fieldNameToCheck) {
    // eslint-disable-next-line no-undef
    return Object.keys(ACG_TAB_PROPERTY_MAP).includes(fieldNameToCheck);
  }

  static isFieldComponentType(typeToCheck) {
    const typeBlacklist = Object.values(constants.fieldValueTypes).concat([
      'root',
      'tabview',
    ]);
    return !typeBlacklist.includes(typeToCheck);
  }
}

export default ACGHelper;
