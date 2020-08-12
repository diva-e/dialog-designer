import loadIcons from 'loadicons';
import * as Coral from '@adobe/coral-spectrum';
import spectrumIcons from '@spectrum-css/icon/dist/spectrum-css-icons.svg';
import workflowIcons from '@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg';

// optinal might be needed later
// @spectrum-css/icon/dist/spectrum-css-icons.svg
// @spectrum-css/icon/dist/spectrum-css-icons-medium.svg
// @spectrum-css/icon/dist/spectrum-css-icons-large.svg

loadIcons(spectrumIcons);
loadIcons(workflowIcons);

window.Coral = Coral;
