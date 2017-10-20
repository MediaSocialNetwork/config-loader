module.exports = {
  development: {
    kue: {
      host: 'localhost',
      port: '6379'
    }
  },
  production: {
    kue: {
      host: 'my-cloud-redis.com',
      port: '6379'
    },
    s3: {
      accessKey: 'xxx'
    }
  }
};
