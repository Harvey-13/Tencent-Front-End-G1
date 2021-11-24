const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const { PROJECT_PATH, SERVER_HOST, SERVER_PORT } = require('./PATH');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.(less|css)$/i,
        use: ['style-loader', 'css-loader', 'less-loader',
        ],
      },
    ],
  },

  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    compress: true,
    open: true,
    hot: true,
  },
  target: 'web',
})