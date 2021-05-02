'use strict';

const WebpackAssetsManifest = require('webpack-assets-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const htmlOptions = {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
};
const production = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      minify: htmlOptions,
    }),
    new HtmlWebpackPlugin({
      filename: 'projects.html',
      template: 'projects.html',
      minify: htmlOptions,
    }),
    new StatsWriterPlugin({ fields: null, filename: '../stats.json' }),
    new WebpackAssetsManifest(),
    new CssoWebpackPlugin(),
  ],
  devtool: 'source-map',
};

module.exports = production;
