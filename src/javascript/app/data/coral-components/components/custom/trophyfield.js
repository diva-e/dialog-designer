/* eslint-disable no-undef */
import constants from '../../constants';
import LABEL_TEMPLATE from '../../partials/label';

const trophyfield = {
  name: 'Trophyfield',
  tag: 'Tr',
  category: constants.fieldCategories.CUSTOM.name,
  tagColor: constants.fieldCategories.CUSTOM.color,
  description: 'Trophy Chooser',
  id: 'trophyfield',
  fields: [
    FIELD_DEFINITION_ID,
    {
      id: 'label',
      label: 'Field Label',
      description: '',
      type: 'String',
      defaultValue: 'Trophytype',
      required: false,
    },
  ],
  previewOutput: `<div class="trophyfield">
     ${LABEL_TEMPLATE}
     <div class="trophyfield_choises">
       <input type="radio" class="trophyvalue trophyvalue--bronce" name="{id}" value="15" title="Bronce" />
       <input type="radio" class="trophyvalue trophyvalue--silver" name="{id}" value="30" title="Silver" />
       <input type="radio" class="trophyvalue trophyvalue--gold" name="{id}" value="90" title="Gold" />
       <input type="radio" class="trophyvalue trophyvalue--platinum" name="{id}" value="180" title="Platinum" />
      </div>
  </div>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="/apps/components/dialogfields/trophyfield"
    fieldDescription="{description}"
    fieldLabel="{label}"
    name="./{id}"
    value=""
  />`,
};

export default trophyfield;
