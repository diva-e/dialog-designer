const textfield = {
  name: 'Textfield',
  description: 'Textfield for entering text',
  nodeName: 'div-textfield',
  src: `<div class="coral-Form-fieldwrapper">
    <label class="coral-Form-fieldlabel" id="{id}">{label}</label>
    <input class="coral-Form-field" placeholder="{placeholder}" name="name" labelledby="{id}">

  </div>`,
};

export default textfield;
