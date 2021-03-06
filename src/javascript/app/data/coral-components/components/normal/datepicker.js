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
      type: constants.fieldValueTypes.STRING,
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
      type: constants.fieldValueTypes.STRING,
      defaultValue: 'Choose a date',
    },
    {
      id: 'displayformat',
      label: 'Display Format',
      description: '',
      type: constants.fieldValueTypes.STRING,
      defaultValue: 'YYYY-MM-DD',
    },
    {
      id: 'startday',
      label: 'Startday',
      description: '',
      type: constants.fieldValueTypes.LONG,
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
    data-optional.fieldLabel="{label}"
    data-optional.placeholder="{placeholder}"
    data-optional.fieldDescription="{description}"
    data-optional.displayedFormat="{displayformat}"
    data-optional.startday="{startday}"
    type="{datetime}"
    data-optional.required="{required}"
    typeHint="Date"
  />`,
};

export default datepicker;
