const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // arquivo principal da nossa aplicação
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader" // lib para integração entre o babel e o webpack
      }
    ],
  }
};