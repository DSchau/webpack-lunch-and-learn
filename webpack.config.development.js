const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.svg$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png',
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.gif$/,
        loader: 'url-loader?mimetype=image/gif',
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?mimetype=image/jpg',
        include: path.join(__dirname, 'assets')
      }
    ]
  }
};
