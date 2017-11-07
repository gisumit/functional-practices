const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: ['./src/app.js', './index.html'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015'] },
      },
      {
        test: /\.html$/,
        loader: 'raw-loader', // loaders: ['raw-loader'] is also perfectly acceptable.
      },
    ],
  },
};
