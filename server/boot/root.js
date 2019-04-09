'use strict';
const history = require('connect-history-api-fallback');

module.exports = function(server) {
  console.log('Process.env: ', process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development') {
    const router = server.loopback.Router();
    router.get('/', server.loopback.status());
    server.use(router);
  } else {
    server.use(history({}));
  }
};
