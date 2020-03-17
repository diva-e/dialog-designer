const webpack = require('webpack');
const chalk = require('chalk');
const webpackConfig = require('./webpack.config.prod');

const compiler = webpack(webpackConfig);

function printErrors(summary, errors) {
  console.info(chalk.red(summary));
  console.info();
  errors.forEach((error) => {
    console.info(error.message || error);
    console.info();
  });
}

compiler.run((error, stats) => {
  if (error) {
    printErrors('Failed to compile.', [error]);
    process.exit(1);
  }

  if (stats.compilation.errors.length) {
    printErrors('Failed to compile.', stats.compilation.errors);
    process.exit(1);
  }

  if (process.env.CI && stats.compilation.warnings.length) {
    printErrors('Failed to compile.', stats.compilation.warnings);
    process.exit(1);
  }

  console.info(chalk.green('Compiled successfully.'));
});
