/* eslint-disable no-param-reassign,no-undef,padding-line-between-statements,no-trailing-spaces */
import ACGHelper from './ACGHelper';
import ACGField from './ACGField';

class ACGProcessor {
  constructor() {
    this.properties = [];
    this.tabs = [];
    this.processRAM = {
      currentTabIndex: -1,
      currentContainerPropertyIndex: -1,
    };
  }

  processInput(fields) {
    fields.forEach((field) => {
      if (ACGHelper.isFieldComponentType(field.type) && field.type !== 'tab') {
        console.log(field.type);
        const currentFieldObject = new ACGField();
        currentFieldObject.fill(field);
        if (this.processRAM.currentContainerPropertyIndex >= 0) {
          this.properties[this.processRAM.currentContainerPropertyIndex].addItem(currentFieldObject);
        } else {
          this.properties.push(currentFieldObject);
        }
        if (field.isContainer) {
          this.processRAM.currentContainerPropertyIndex = this.properties.length - 1;
        }
      } else {
        if (field.type === 'tab') {
          this.processRAM.currentTabIndex = this.tabs.length - 1;
        }
        const children = Object.entries(field.children);
        if (children.length > 0) {
          const childFields = children[0][1];
          // todo: save last parent to check against
          this.processInput(childFields);
        }
      }
    });
  }

  getACGOutput(structureInput) {
    console.log(structureInput);
    let acgData = ACG_DEFAULT_CONFIG;
    // if dialog has content
    if (structureInput.children.hasOwnProperty('content')) {
      this.processInput(structureInput.children.content);
    }
    console.log(acgData);
    // todo: #32 implement main meta data
    // acgData.name = 'my-component';
    // acgData.title = 'My Component';
    // acgData.group = 'Basic Components';
    console.log(this);
    return JSON.stringify(acgData, null, 2);
  }
}

export default ACGProcessor;

//       if (typeof structure[property] === 'object') {
//         if (property === 'children' && (structure.type === 'multifield' || structure.type === 'fieldset')) {
//           // multifield children turn detected
//
//         } else {
//           acgDataModifiable = getACG(acgDataModifiable, structure[property]);
//         }
//       } else {
//         // if current object is a field component
//         if (property === 'type' && isFieldComponentType(structure[property])) {
//           console.log(property, structure[property]);
//           if (structure[property] === 'tab') {
//             // todo: tab handling
//           } else {
//             if (structure.hasOwnProperty('properties')) {
//               const currentFieldObject = {
//                 field: '',
//                 type: structure[property],
//                 'json-expose': true,
//                 attributes: {},
//               };
//               Object.entries(structure.properties).forEach((fieldData) => {
//                 const field = fieldData[1];
//                 if (field.hasOwnProperty('id') && field.hasOwnProperty('value')) {
//                   if (isInACGMainFieldPropertyMap(field.id)) {
//                     currentFieldObject[ACG_MAIN_FIELD_PROPERTY_MAP[field.id]] = field.value;
//                   } else {
//                     switch (field.type) {
//                       case constants.fieldValueTypes.BOOLEAN:
//                         if (field.value !== '' || typeof field.value === 'undefined') {
//                           currentFieldObject.attributes[field.id] = `{Boolean}${field.value.toString()}`;
//                         }
//                         break;
//                       case constants.fieldValueTypes.KEY_VALUE:
//                         currentFieldObject.items = [];
//                         field.value.forEach((fieldItem) => {
//                           const currentItem = {
//                             field: fieldItem.itemId,
//                             attributes: {
//                               text: fieldItem.itemCaption,
//                               value: fieldItem.itemValue,
//                             },
//                           };
//                           currentFieldObject.items = currentFieldObject.items.concat([currentItem]);
//                         });
//                         break;
//                       default:
//                         currentFieldObject.attributes[field.id] = field.value;
//                     }
//                   }
//                 }
//                 // todo: add field to currentTab if any
//               });
//
//                // todo: multifield, fieldset handling
//               /*
//               if (structure.hasOwnProperty('children')) {
//                 const children = Object.entries(structure.children);
//                 if (children.length > 0) {
//                   const childFields = children[0][1];
//                   console.log(childFields);
//                   let subAcgDataModifiable = [];
//                   currentFieldObject.items = [];
//                   subAcgDataModifiable = getACG(acgDataModifiable, childFields);
//                   currentFieldObject.items = currentFieldObject.items.concat([subAcgDataModifiable]);
//                 } else {
//                   // eslint-disable-next-line no-param-reassign
//                   acgDataModifiable.options.properties = acgDataModifiable.options.properties.concat([currentFieldObject]);
//                 }
//
//               } else {
//                 acgDataModifiable.options.properties = acgDataModifiable.options.properties.concat([currentFieldObject]);
//               }
//                */
//               acgDataModifiable.options.properties = acgDataModifiable.options.properties.concat([currentFieldObject]);
//
//             }
//           }
//         }
//       }
//     }
//   }
//
//   return acgDataModifiable;
// };
