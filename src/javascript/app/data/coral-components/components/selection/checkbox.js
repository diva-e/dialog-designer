/* eslint-disable no-undef */
import coralConstants from '../../constants';

const checkbox = {
  name: 'Checkbox',
  tag: 'CB',
  category: coralConstants.fieldCategories.SELECTION,
  tagColor: coralConstants.fieldCategoryColors.SELECTION,
  description: 'Checkbox',
  id: 'checkbox',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
  ],
  src: `<coral-checkbox
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
    </coral-checkbox>`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/checkbox"
    text="Hide Mismatches"
    fieldDescription="{description}"
    fieldLabel="{label}"
    name="./{id}}"
    value="{Boolean}true"
    uncheckedValue="{Boolean}false"/>`,
};

export default checkbox;
