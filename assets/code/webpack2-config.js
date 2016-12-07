module.exports = function(opts) {
  return Object.assign({
    // existing webpack config
  }, opts.prod ? {
    entry: [
      './vendor',
      './index'
    ]
  } : {};
};
