const path = require('path');

module.exports = {
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:['react', 'es2015'],
          env: {
            development: {
              plugins: [['react-transform', {
                transforms: [{
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module']
                }]
              }]]
            }
          }
        }
      },
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
