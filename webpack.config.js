const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/App.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
      },
    ],
  },
};
