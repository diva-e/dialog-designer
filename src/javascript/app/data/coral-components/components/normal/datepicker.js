import { Datepicker } from '@adobe/coral-spectrum';
/* eslint-disable no-undef */
import constants from '../../constants';

const datepicker = {
  name: 'Datepicker',
  tag: 'DP',
  category: constants.fieldCategories.STANDARD.name,
  tagColor: constants.fieldCategories.STANDARD.color,
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
          value: Datepicker.type.DATE,
          caption: 'Date',
        },
        {
          value: Datepicker.type.DATETIME,
          caption: 'Date Time',
        },
        {
          value: Datepicker.type.TIME,
          caption: 'Time',
        },
      ],
      defaultValue: Datepicker.type.DATETIME,
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
  previewOutput: `<div>
      <label
        id="label_{id}"
        class="coral-Form-fieldlabel"
        for="{id}">{label}</label>
      <coral-datepicker
        placeholder={placeholder}
        name={id}
        value=""
        valueformat={displayformat}
        displayformat={displayformat}
        startday="0">
      </coral-datepicker>
    </div>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/datepicker"
    displayedFormat="{displayformat}"
    fieldLabel="{label}"
    name="./{id}"
    type="{datetime}"
    typeHint="Date"/>`,
};

export default datepicker;
