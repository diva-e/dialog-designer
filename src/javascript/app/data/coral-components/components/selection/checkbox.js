import coralConstants from '../../constants';

const checkbox = {
  name: 'Checkbox',
  tag: 'CB',
  category: coralConstants.fieldCategories.SELECTION,
  description: 'Checkbox',
  id: 'checkbox',
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
    sling:resourceType="granite/ui/components/coral/foundation/form/hidden"
    fieldDescription="{label}"
    fieldLabel="{label}"
    name="./{id}"
    required="{Boolean:required}"
    uncheckedValue="{Boolean}false"
    defaultChecked="{Boolean}true"
    value="{Boolean:value}"/>`,
};

export default checkbox;
