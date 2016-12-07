const assign = require('webpack-config-assign');

const env = process.env.NODE_ENV;

module.exports = assign({
  // some base config
}, require(`./webpack.config.${env}`));
