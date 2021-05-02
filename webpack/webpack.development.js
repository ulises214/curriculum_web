'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'projects.html',
      template: 'projects.html',
    }),
  ],
  devtool: 'inline-source-map',
};

module.exports = development;
