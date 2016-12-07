const webpack = require('webpack');
const path = require('path');
const pkg = require(path.resolve('./package.json'));

module.exports = {
  entry: {
    vendor: Object.keys(pkg.dependencies)
      .filter((dep) => ['normalize.css'].indexOf(dep) === -1)
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ]
};
