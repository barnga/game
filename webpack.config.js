const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.resolve('src/index.js'),
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'public/index.html' }
    ]),
  ],
  devServer: {
    historyApiFallback: true,
    port: 7000,
  }
};