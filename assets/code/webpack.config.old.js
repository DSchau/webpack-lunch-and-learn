const webpack = require('webpack');

const env = process.env.NODE_ENV;

const config = {
  // some configuration
};

if ( env === 'development' ) {
  config.devtool = 'eval';

  config.entry.main = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/'
  ];
}

if ( env === 'production' ) {
  config.entry.main = [
    './src/'
  ];

  config.plugins = config.plugins
    .concat([
      // some plugins
    ]);

  config.module.loaders = config.module.loaders
    .splice(1)
    .concat([
      {
        test: /\.css$/
        // do something
      }
    ]);
}

module.exports = config;
