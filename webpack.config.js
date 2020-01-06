const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src/index.js'),
  output: { filename: 'webpack.bundle.js' },
  module: {
    rules: [
      { test: /\.js$/, loaders: 'babel-loader' }
    ]
  }
}
