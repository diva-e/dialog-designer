import { Datepicker } from '@adobe/coral-spectrum';
/* eslint-disable no-undef */
import constants from '../../constants';
import TOOLTIP_WRAPPER_TEMPLATE from '../../partials/tooltip';
import LABEL_TEMPLATE from '../../partials/label';

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
      type: constants.fieldTypes.STRING,
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
      type: constants.fieldTypes.STRING,
      defaultValue: 'Choose a date',
    },
    {
      id: 'displayformat',
      label: 'Display Format',
      description: '',
      type: constants.fieldTypes.STRING,
      defaultValue: 'YYYY-MM-DD',
    },
    {
      id: 'startday',
      label: 'Startday',
      description: '',
      type: constants.fieldTypes.LONG,
      defaultValue: '0',
    },
  ],
  previewOutput: `<div>
      ${LABEL_TEMPLATE}
      <coral-datepicker
        placeholder={placeholder}
        name={id}
        value=""
        valueformat={displayformat}
        displayformat={displayformat}
        startday="0">
      </coral-datepicker>
      ${TOOLTIP_WRAPPER_TEMPLATE}
    </div>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/datepicker"
    name="./{id}"
    fieldLabel="{label}"
    fieldDescription="{description}"
    displayedFormat="{displayformat}"
    type="{datetime}"
    typeHint="Date"
  />`,
};

export default datepicker;
