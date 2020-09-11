/* eslint-disable no-undef */
import constants from '../../constants';
import TOOLTIP_WRAPPER_TEMPLATE from '../../partials/tooltip';

const checkbox = {
  name: 'Checkbox',
  tag: 'CB',
  category: constants.fieldCategories.SELECTION.name,
  tagColor: constants.fieldCategories.SELECTION.color,
  description: 'Checkbox',
  id: 'checkbox',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
  ],
  previewOutput: `<div>
    <coral-checkbox
      name={id}
      value="true"
      class="coral-Form-field _coral-Checkbox"
    >
      <input
        type="checkbox"
        handle="input"
        class="_coral-Checkbox-input"
        id={id}
        name={id}
        label={label}
        value="true"
      />
      <span class="_coral-Checkbox-box" handle="checkbox" />
      <label class="_coral-Checkbox-label" handle="labelWrapper" htmlFor="{id}">
        <span class="u-coral-screenReaderOnly" handle="screenReaderOnly" hidden="">Select</span>
        <coral-checkbox-label>{label}</coral-checkbox-label>
      </label>
    </coral-checkbox>
    ${TOOLTIP_WRAPPER_TEMPLATE}
  </div>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/checkbox"
    name="./{id}"
    data-optional.fieldLabel="{label}"
    data-optional.fieldDescription="{description}"
    text="{label}"
    value="{Boolean}true"
    uncheckedValue="{Boolean}false"
  />`,
};

export default checkbox;
