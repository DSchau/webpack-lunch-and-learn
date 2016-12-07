const path = require('path');
const webpack = require('webpack');
const assign = require('webpack-config-assign');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = assign({
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: 'html-loader!markdown-loader?gfm=false'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'raw'],
        include: __dirname
      }
    ]
  }
}, require(`./webpack.config.${process.env.NODE_ENV}`));
