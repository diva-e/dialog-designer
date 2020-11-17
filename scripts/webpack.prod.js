const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 2048000,
    maxAssetSize: 2048000,
  },
  devtool: false,
});
