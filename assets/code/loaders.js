require('bootstrap.css');
require('normalize.css');

require('./scss/app.scss');

var img = document.createElement('img');
img.src = require('./some-image.png');
document.body.appendChild(img);

var utils = require('./utils.ts');

utils.doSomething();
