const path = require('path');

const configLoader = require('../.');

const config = configLoader.load({
  defaults: {
    port: 3000,
    s3: {
      accessKey: 'yyy',
      secretKey: '123'
    },
    cloudfront: {}
  },
  file: path.join(__dirname, 'config.js'),
  respectENV: true,
  defaultENV: 'development'
});

console.log('Configuration:\n', config);
