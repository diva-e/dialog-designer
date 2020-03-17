const conf = require('../../package').projectConfig;

const vars = Object.keys(conf).map(key => (
  `$CONFIG_${key}: ${conf[key]};`
)).join('\n');

console.info('available sass variables from package.json [projectConfig]');
console.info(vars);
console.info('\n');

const sassImportLoader = source => (
  `${vars}\n@import 'src/scss/imports/variables';\n@import 'src/scss/imports/mixins';\n${source}`
);

module.exports = sassImportLoader;
