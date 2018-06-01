const path = require('path');

module.exports = {
  entry: './src/app.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'bin'),
    publicPath: "/assets/",
    filename: 'app.bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map'
}
