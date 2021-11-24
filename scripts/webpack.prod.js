const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const { PROJECT_PATH } = require('./PATH')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: 'bundle.js',
    path: path.resolve(PROJECT_PATH, './dist')
  },

  module: {
    rules: [
      {
        test: /\.(less|css)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'less-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  'postcss-preset-env',
                  {
                    autoprefixer: {
                      grid: true
                    }
                  }
                ],
              ],
            },
          },
        }],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  target: 'browserslist',
})