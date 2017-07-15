const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: path.join(__dirname, 'src/App.js'),
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /emotion\.css$/,
        use: ['style-loader', {loader: 'css-loader', options: {modules: true}}],
      },
      {
        test: /emotion\.css$/,
        use: ['style-loader', {loader: 'css-loader'}],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        loader: 'raw-loader',
        test: /\.(example|md)$/,
      },
    ],
  },
};
