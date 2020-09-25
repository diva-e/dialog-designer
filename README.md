# Dialog Designer

## What is Dialog Designer

Single Page Drag/Drop application to create AEM Dialogs.

## Installation / Setup

```
npm i
```

```
npm run dev
```

[http://localhost:3000/](http://localhost:3000/)

### Configs

- [Local Storage Config](./scripts/storageConfig.js)
- [ACG Default Config](./scripts/acgDefaultConfig.js)
- [Default Field Definitions](./scripts/fieldDefinitions.js)
- [Container Policy Config](./scripts/containerPolicyConfig.js)

Changes in those configurations require a rerun of npm run dev.

## Supported Fields

### Layout

- tabs (section)
- fieldset

### Normal Fields

- textfield
- textarea
- numberfield
- richtext
- datepicker
- hidden

### Selection Fields

- select
- checkbox
- switch
- buttongroup
- radio

### Resource Fields

- fileupload
- pathfield

### Authoring Helpers

- anchorbutton
- alert
- heading

## Custom Fields

If you have custom dialog components in your AEM project you could also add a representation into the Dialog Designer using a Custom field Component.

### Adding Custom Field

To implement a custom dialog field to use in the Dialog Designer you need to add an appropriately named .js file to the custom component folder ([./src/javascript/app/data/coral-components/custom](./src/javascript/app/data/coral-components/custom))

This js file now needs to be imported inside the ([./src/javascript/app/data/coral-components/index.js](./src/javascript/app/data/coral-components/index.js))
                  
```javascript       
import helloworld from './components/custom/helloworld';
```   

Additionally, the import needs to be added to the coralComponents Array in the same file.

```javascript  
const coralComponents = [
    ...
    helloworld,
];                         
```

### Structure / Definition

| Property | ValueType | Info |
| --- | --- | --- |
| name | String | Name used in sidepanel |
| tag | String | Two character abbreviation used in sidepanel tag  |
| category | String | constants.fieldCategories (name) |
| tagColor | String | constants.fieldCategories (color) |
| id | String | Unique id for the field component, has to match field component import name ([./src/javascript/app/data/coral-components/index.js](./src/javascript/app/data/coral-components/index.js)) |
| fields | Array | see "Field Edit Definitions" |
| previewOutput | String | HTML template string that represents a preview output of the actual field component.Has placeholder support. |
| xmlOutput | String | XML template string that represents actual cq:dialog.xml output that supports placeholders. |


### Sample

The sample is already part of the application ([./src/javascript/app/data/coral-components/custom/helloworld.js](./src/javascript/app/data/coral-components/custom/helloworld.js)).
 

```javascript
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
    sling:resourceType="/apps/components/dialogfields/helloworld"
    hello="{hello}"
    world="{world}"
  />`,
};

export default helloworld;
```

### Commonly used helper imports

```javascript
import constants from '../../constants';
import LABEL_TEMPLATE from '../../partials/label';
import TOOLTIP_WRAPPER_TEMPLATE from '../../partials/tooltip';
```

### Field Edit Definitions

Default predefined Field Edit Definitions to use in fields [] are:

- FIELD_DEFINITION_ID
- FIELD_DEFINITION_LABEL
- FIELD_DEFINITION_REQUIRED
- FIELD_DEFINITION_DESCRIPTION

Those constants include the most commonly used definitions for most components.

To use the constants you need to add an ignore on undefined variables to your field

```javascript
/* eslint-disable no-undef */
```

Though of course custom definitions are possible and necessary.

Example:
```javascript
{
  id: 'hello',
  label: 'Hellotext',
  description: '',
  type: 'String',
  defaultValue: 'Hello',
  required: true,
},
```

| Property| Value-Type | Info |
| --- | --- | --- |
| id | String | Unique for the current field. Used to access inside previewOutput or xmlOutput via placeholder expression. |
| label | String | Shown as label inside the edit field dialog on the current edit field property |
| description | String | \[optional] Shown as info tooltip inside the edit field dialog on the current edit field property |
| type | String | \[String, Boolean, Long, KeyValue] ([constants.fieldValueTypes](./src/javascript/app/data/coral-components/constants.js) constants can be used as well here |
| defaultValue | String | \[optional] Default value for the edit field property inserted upon creation. |
| required | Boolean | \[optional] whether or not to Editfield property is mandatory or not. Default: false  |

### Custom CSS

If necessary custom CSS for your custom field to better represent the real field can be added within [./src/scss/custom/index.scss](./src/scss/custom/index.scss).
A sample can be found in [./src/scss/custom/helloworld.scss](./src/scss/custom/helloworld.scss) (while imported in the upper mentioned [index.scss](./src/scss/custom/index.scss)).                                                                                                

## Supported Download options

| Format| Filename | Info |
| --- | --- | --- |
| XML | _cq_dialog.xml | to directly use in AEM projects |
| JSON | dialog.json | For saving on disk an future load feature in tools Library  |
| AEM Component Generator JSON | acg.json | to use with AEM Component Generator |

## Contributing

Please checkout our [contributing guideline](CONTRIBUTING.md).  
