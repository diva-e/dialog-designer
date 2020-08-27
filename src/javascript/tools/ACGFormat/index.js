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
                // console.log('field', field);
                // console.log('fieldData', fieldData);
                // console.log('index', index);
                if (field.hasOwnProperty('id') && field.hasOwnProperty('value')) {
                  if (isInACGMainFieldPropertyMap(field.id)) {
                    // console.log('val', ACG_MAIN_FIELD_PROPERTY_MAP[field.id]);
                    // console.log('->', field.value);
                    currentFieldObject[ACG_MAIN_FIELD_PROPERTY_MAP[field.id]] = field.value;
                    // console.log({ currentFieldObject });
                  } else {
                    switch (field.type) {
                      case constants.fieldValueTypes.BOOLEAN:
                        // todo: check subtype for Boolean
                        if (field.value !== '' || typeof field.value === 'undefined') {
                          currentFieldObject.attributes[field.id] = `{Boolean}${field.value.toString()}`;
                        }
                        break;
                      case constants.fieldValueTypes.KEY_VALUE:
                        // todo: handle select / radio / radiobutton sub-items basically subtype KeyValue
                        break;
                      default:
                        currentFieldObject.attributes[field.id] = field.value;
                    }

                    /*

                    ##########  SELECT  ###########

                    "items": [
                      {
                        "field": "option1",
                        "attributes": {
                          "selected": "true",
                          "text": "Option 1",
                          "value": "opt1"
                        }
                      },
                      {
                        "field": "option2",
                        "attributes": {
                          "text": "Option 2",
                          "value": "opt2"
                        }
                      }
                    ]

                    ++++++++++++++++++++++++++++++++

                    {
                        "id": "options",
                        "label": "Options",
                        "type": "KeyValue",
                        "value": [
                          {
                            "itemCaption": "My Option 2",
                            "itemValue": "two",
                            "itemId": "item_0"
                          },
                          {
                            "itemCaption": "MyOption 3",
                            "itemValue": "three",
                            "itemId": "item_1"
                          }
                        ]
                      },

                    ##########  RADIO  ###########

                    "items": [
                    {
                        "field": "radio1",
                        "type": "radio",
                        "attributes": {
                            "checked": "{Boolean}true",
                            "name": "radioTest",
                            "text": "Radio 1",
                            "value": "rad1"
                        }
                    },
                    {
                        "field": "radio2",
                        "type": "radio",
                        "attributes": {
                            "checked": "{Boolean}true",
                            "name": "radioTest",
                            "text": "Radio 2",
                            "value": "rad2"
                        }
                    }

                    +++++++++++++++++++++++++++++++++++++++

                    {
                        "id": "radiobuttons",
                        "label": "Radiobuttons",
                        "type": "KeyValue",
                        "value": [
                          {
                            "itemCaption": "My Radio 1",
                            "itemValue": "one",
                            "itemId": "item_0"
                          },
                          {
                            "itemCaption": "My Radio 2",
                            "itemValue": "two",
                            "itemId": "item_1"
                          }
                        ]
                      }
                ]

                */

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
