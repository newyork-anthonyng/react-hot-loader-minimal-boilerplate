const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.ejs",
      html: `<%- html %>`,
      filename: './index.ejs'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
