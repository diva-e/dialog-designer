/* eslint-disable no-undef */
import constants from '../../constants';

const helloworld = {
  name: 'HelloWorld',
  tag: 'HW',
  category: constants.fieldCategories.CUSTOM.name,
  tagColor: constants.fieldCategories.CUSTOM.color,
  description: 'Hello World Sample',
  id: 'helloworld',
  fields: [
    FIELD_DEFINITION_ID,
    {
      id: 'hello',
      label: 'Hellotext',
      description: '',
      type: 'String',
      defaultValue: 'Hello',
      required: true,
    },
    {
      id: 'world',
      label: 'Worldtext',
      description: '',
      type: 'String',
      defaultValue: 'World',
      required: true,
    },
  ],
  previewOutput: `<div class="helloworld">
   <span class="helloworld_hello">{hello}</span>
   <span class="helloworld_world">{world}</span>
  </div>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/heading"
    hello="{hello}"
    world="{world}"
  />`,
};

export default helloworld;
