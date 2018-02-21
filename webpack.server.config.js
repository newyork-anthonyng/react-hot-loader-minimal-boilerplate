const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const nodeExternals = require("webpack-node-externals");

module.exports = {
  context: path.resolve(__dirname, "route"),
  entry: {
    'indexRoute': "./index.js"
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
}
