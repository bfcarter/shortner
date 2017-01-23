const debugCtrl = require('../controllers/debugger.js');

module.exports = function (req, res, next) {
  const ip = req.ip;
  const realUrl = req.originalUrl;

  debugCtrl.debug('normal', 'ip: ' + ip + ' sent an request to url: ' + realUrl);

  next();
};
