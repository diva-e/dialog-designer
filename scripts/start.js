const webpack = require('webpack');
const chalk = require('chalk');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.dev');

const compiler = webpack(webpackConfig);

const devServerOptions = Object.assign({}, webpackConfig.devServer);

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(3000, () => {
  console.info(chalk.green('Starting server on http://localhost:3000'));
});
