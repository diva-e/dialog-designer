/* eslint-disable no-undef */
import coralConstants from '../../constants';

const datepicker = {
  name: 'Datepicker',
  tag: 'DP',
  category: coralConstants.fieldCategories.STANDARD,
  tagColor: coralConstants.fieldCategoryColors.STANDARD,
  description: 'Datepicker Field',
  id: 'datepicker',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
    {
      id: 'placeholder',
      label: 'Placeholder',
      description: '',
      type: 'String',
      defaultValue: 'Choose a date',
    },
    {
      id: 'valueformat',
      label: 'Value Format',
      description: '',
      type: 'String',
      defaultValue: 'Choose a date',
    },
    {
      id: 'displayformat',
      label: 'Display Format',
      description: '',
      type: 'String',
      defaultValue: 'Choose a date',
    },
    {
      id: 'startday',
      label: 'Startday',
      description: '',
      type: 'Long',
      defaultValue: 'Choose a date',
    },
  ],
  /* todo: preview output */
  src: `<coral-datepicker
      placeholder="Choose a date"
      name="field"
      value="2015-01-15"
      valueformat="YYYY-MM-DD"
      displayformat="YYYY-MM-DD"
      startday="0">
    </coral-datepicker>`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/datepicker"
    displayedFormat="MM-DD-YYYY HH:mm"
    fieldLabel="{label}"
    name="./{id}"
    type="datetime"
    typeHint="Date"/>`,
};

export default datepicker;
