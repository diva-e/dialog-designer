/* eslint-disable no-param-reassign,no-undef,padding-line-between-statements,no-trailing-spaces */
import ACGHelper from './ACGHelper';
import ACGField from './ACGField';
import ACGTab from './ACGTab';

class ACGProcessor {
  constructor() {
    this.properties = [];
    this.propertiesTabs = [];
    this.processRAM = {
      currentTabIndex: -1,
      currentContainerPropertyIndex: -1,
    };
  }

  processInput(fields) {
    fields.forEach((field) => {
      if (ACGHelper.isFieldComponentType(field.type) && field.type !== 'tab') {
        console.log(field.type);
        const currentACGField = new ACGField();
        currentACGField.fill(field);
        if (this.processRAM.currentContainerPropertyIndex >= 0) {
          this.properties[this.processRAM.currentContainerPropertyIndex].addItem(currentACGField);
        } else {
          this.properties.push(currentACGField);
          if (this.processRAM.currentTabIndex >= 0) {
            this.propertiesTabs[this.processRAM.currentTabIndex].addField(currentACGField);
          }
        }
        if (field.isContainer) {
          this.processRAM.currentContainerPropertyIndex = this.properties.length - 1;
        }
      } else {
        if (field.type === 'tab') {
          const currentACGTab = new ACGTab();
          currentACGTab.fill(field);
          this.propertiesTabs.push(currentACGTab);
          this.processRAM.currentTabIndex = this.propertiesTabs.length - 1;
        }
        const children = Object.entries(field.children);
        if (children.length > 0) {
          const childFields = children[0][1];
          this.processInput(childFields);
          this.processRAM.currentContainerPropertyIndex = -1;
        }
      }
    });
  }

  getACGOutput(structureInput) {
    console.log(structureInput);
    const acgData = ACG_DEFAULT_CONFIG;
    // if dialog has content
    if (structureInput.children.hasOwnProperty('content')) {
      this.processInput(structureInput.children.content);
    }
    acgData.options.properties = this.properties;
    acgData.options.propertiesTabs = this.propertiesTabs;
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
