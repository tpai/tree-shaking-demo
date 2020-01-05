const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: path.join(__dirname, 'src/index.js'),
  output: { filename: 'webpack.bundle.js' },
  module: {
    rules: [
      { test: /\.js$/, loaders: 'babel-loader' }
    ]
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        keep_fnames: true,
        compress: {
          defaults: false,
          dead_code: true,
        },
      },
    })],
  }
}
