/* eslint-disable no-undef,no-lonely-if,no-trailing-spaces */
import constants from '../../app/data/coral-components/constants';

const ACG_FIELD_MAP = {
  id: 'field',
  label: 'label',
  description: 'description',
};

const isInACGFieldMap = (fieldNameToCheck) => Object.keys(ACG_FIELD_MAP).includes(fieldNameToCheck);

const isFieldComponentType = (typeToCheck) => {
  const typeBlacklist = Object.values(constants.fieldTypes).concat([
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
                console.log('field', field);
                console.log('fieldData', fieldData);
                console.log('index', index);
                if (field.hasOwnProperty('id') && field.hasOwnProperty('value')) {
                  if (isInACGFieldMap(field.id)) {
                    console.log('val', ACG_FIELD_MAP[field.id]);
                    console.log('->', field.value);
                    currentFieldObject[ACG_FIELD_MAP[field.id]] = field.value;
                    console.log({ currentFieldObject });
                  } else {
                    // todo: check subtype for Boolean

                    currentFieldObject.attributes[field.id] = field.value;
                  }
                }
                // todo: add field to currentTab if any
                /*

                 {
                  "field": "dateTest",
                  "description": "Context tooltip for authors.",
                  "type": "datepicker",
                  "json-expose": true,
                  "label": "Select Date",
                  "attributes": {
                      "displayedFormat": "MM/DD/YYYY"
                  }
                 },

                 */

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
