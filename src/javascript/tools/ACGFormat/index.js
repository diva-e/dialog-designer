/* eslint-disable no-undef,no-lonely-if,no-trailing-spaces,indent */
import constants from '../../app/data/coral-components/constants';

const ACG_MAIN_FIELD_PROPERTY_MAP = {
  id: 'field',
  label: 'label',
  description: 'description',
};

const isInACGMainFieldPropertyMap = (fieldNameToCheck) => Object.keys(ACG_MAIN_FIELD_PROPERTY_MAP).includes(fieldNameToCheck);

const isFieldComponentType = (typeToCheck) => {
  const typeBlacklist = Object.values(constants.fieldValueTypes).concat([
    'root',
    'tabview',
  ]);
  return !typeBlacklist.includes(typeToCheck);
};

const getACG = (acgData, structure) => {
  for (const property in structure) {
    if (structure.hasOwnProperty(property)) {
      if (typeof structure[property] === 'object') {
        getACG(acgData, structure[property]);
      } else {
        // if current object is a field component
        if (property === 'type' && isFieldComponentType(structure[property])) {
          console.log(property, structure[property]);
          if (structure[property] === 'tab') {
            // todo: tab handling
          } else {
            if (structure.hasOwnProperty('properties')) {
              const currentFieldObject = {
                field: '',
                type: structure[property],
                'json-expose': true,
                attributes: {},
              };
              Object.entries(structure.properties).forEach((fieldData, index) => {
                const field = fieldData[1];
                if (field.hasOwnProperty('id') && field.hasOwnProperty('value')) {
                  if (isInACGMainFieldPropertyMap(field.id)) {
                    currentFieldObject[ACG_MAIN_FIELD_PROPERTY_MAP[field.id]] = field.value;
                  } else {
                    switch (field.type) {
                      case constants.fieldValueTypes.BOOLEAN:
                        if (field.value !== '' || typeof field.value === 'undefined') {
                          currentFieldObject.attributes[field.id] = `{Boolean}${field.value.toString()}`;
                        }

                        break;
                      case constants.fieldValueTypes.KEY_VALUE:
                        currentFieldObject.items = [];
                        field.value.forEach((fieldItem) => {
                          const currentItem = {
                            field: fieldItem.itemId,
                            attributes: {
                              text: fieldItem.itemCaption,
                              value: fieldItem.itemValue,
                            },
                          };
                          currentFieldObject.items = currentFieldObject.items.concat([currentItem]);
                        });
                        break;
                      default:
                        currentFieldObject.attributes[field.id] = field.value;
                    }

                // todo: handle multifields

                /*

                ##########  MULTIFIELD  ###########

                 "items": [
                    {
                        "field": "path",
                        "type": "pathfield",
                        "label": "Path",
                        "description": "Path to the page",
                        "json-expose": true
                    },
                    {
                        "field": "label",
                        "type": "textfield",
                        "label": "Label",
                        "description": "Label to display on the link",
                        "json-expose": true
                    }
                  ]
                */


                  }
                }
                // todo: add field to currentTab if any
              });
              // eslint-disable-next-line no-param-reassign
              acgData.options.properties = acgData.options.properties.concat([currentFieldObject]);
            }
          }
        }
      }
    }
  }

  return acgData;
};

const ACGFormat = (structure) => {
  console.log(structure);
  let acgData = ACG_DEFAULT_CONFIG;
  // if dialog has content
  if (structure.children.hasOwnProperty('content')) {
    acgData = getACG(ACG_DEFAULT_CONFIG, structure);
  }

  console.log(acgData);
  // todo: #32 implement main meta data
  // acgData.name = 'my-component';
  // acgData.title = 'My Component';
  // acgData.group = 'Basic Components';

  return JSON.stringify(acgData, null, 2);
};

export default ACGFormat;
