var webpack = require('webpack');
var isProd = (process.env.NODE_ENV === 'production');

module.exports = {
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  externals: ['fs'],

  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: './dist',
    filename: isProd ? 'react-simplemde-editor.min.js' : 'react-simplemde-editor.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  }

};
