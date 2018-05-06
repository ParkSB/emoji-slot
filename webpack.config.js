const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DIST_DIR_NAME = 'dist'
const DIST_PATH = path.join(__dirname, DIST_DIR_NAME);
const DIST_JS_NAME = `emoji-slot-[name].js`;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: DIST_PATH,
    filename: DIST_JS_NAME
  },
  devServer: {
    contentBase: path.join(__dirname, './test/'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          },
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.webpack.js', '.web.js', '.js', '.json', 'css']
  },
  node: {
    console: false,
    global: true,
    process: true,
    Buffer: true,
    setImmediate: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};