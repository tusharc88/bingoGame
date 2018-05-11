const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: process.env.NODE_ENV,
  entry: {
    app: path.resolve(__dirname, '../../src'),
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'babel-polyfill'],
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../../'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new MinifyPlugin(
      {},
      {
        sourceMap: true,
      }
    ),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: ['>1%', 'last 4 versions'],
          }),
        ],
      },
    }),
  ],
});
