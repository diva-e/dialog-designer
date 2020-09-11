/* eslint-disable no-trailing-spaces */
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

  processInput(fields, wasTab = false, wasContainer = false) {
    fields.forEach((field) => {
      if (ACGHelper.isFieldComponentType(field.type) && field.type !== 'tab') {
        const currentACGField = new ACGField();
        currentACGField.fill(field);

        if (wasContainer) {
          this.properties[this.processRAM.currentContainerPropertyIndex].addItem(currentACGField);
        } else {
          this.properties.push(currentACGField);
          if (wasTab) {
            this.propertiesTabs[this.processRAM.currentTabIndex].addField(currentACGField);
          }

          const children = Object.entries(field.children);
          if (children.length > 0) {
            const childFields = children[0][1];
            this.processRAM.currentContainerPropertyIndex = this.properties.length - 1;
            this.processInput(childFields, false, true);
            this.processRAM.currentContainerPropertyIndex = -1;
          }
        }
      } else {
        // not a direct field (tab or structure node)
        if (field.type === 'tab') {
          const currentACGTab = new ACGTab();
          currentACGTab.fill(field);
          this.propertiesTabs.push(currentACGTab);
          this.processRAM.currentTabIndex = this.propertiesTabs.length - 1;
        }

        const children = Object.entries(field.children);
        if (children.length > 0) {
          const childFields = children[0][1];
          this.processInput(childFields, field.type === 'tab', false);
          this.processRAM.currentTabIndex = -1;
        }
      }
    });
  }

  getACGOutput(structureInput) {
    // eslint-disable-next-line no-undef
    const acgData = ACG_DEFAULT_CONFIG;
    // if dialog has content
    if (structureInput.children.hasOwnProperty('content')) {
      this.processInput(structureInput.children.content);
    }

    acgData.options.properties = this.properties;
    acgData.options.propertiesTabs = this.propertiesTabs;
    // todo: #32 implement main meta data
    // acgData.name = 'my-component';
    // acgData.title = 'My Component';
    // acgData.group = 'Basic Components';
    return JSON.stringify(acgData, null, 2);
  }
}

export default ACGProcessor;
