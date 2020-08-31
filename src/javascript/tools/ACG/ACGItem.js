class ACGItem {
  constructor(fieldItem) {
    if (fieldItem) {
      this.fill(fieldItem);
    }
  }

  fill(fieldItem) {
    this.field = fieldItem.itemId;
    this.attributes = {
      text: fieldItem.itemCaption,
      value: fieldItem.itemValue,
    };
  }

  getACGObjectNotation() {
    return {
      field: this.field,
      attributes: this.attributes,
    };
  }
}

export default ACGItem;
