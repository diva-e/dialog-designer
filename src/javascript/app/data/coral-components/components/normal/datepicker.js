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
      id: 'type',
      label: 'Type',
      description: '',
      type: 'String',
      options: [
        {
          value: Coral.Datepicker.type.DATE,
          caption: 'Date',
        },
        {
          value: Coral.Datepicker.type.DATETIME,
          caption: 'Date Time',
        },
        {
          value: Coral.Datepicker.type.TIME,
          caption: 'Time',
        },
      ],
      defaultValue: Coral.Datepicker.type.DATETIME,
      required: true,
    },
    {
      id: 'placeholder',
      label: 'Placeholder',
      description: '',
      type: 'String',
      defaultValue: 'Choose a date',
    },
    {
      id: 'displayformat',
      label: 'Display Format',
      description: '',
      type: 'String',
      defaultValue: 'YYYY-MM-DD',
    },
    {
      id: 'startday',
      label: 'Startday',
      description: '',
      type: 'Long',
      defaultValue: '0',
    },
  ],
  src: `<coral-datepicker
      placeholder={placeholder}
      name={id}
      value=""
      valueformat={displayformat}
      displayformat={displayformat}
      startday="0">
    </coral-datepicker>`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/datepicker"
    displayedFormat="{displayformat}"
    fieldLabel="{label}"
    name="./{id}"
    type="{datetime}"
    typeHint="Date"/>`,
};

export default datepicker;
