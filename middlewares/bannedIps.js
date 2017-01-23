const bannedIps = ['8.8.8.8'];

module.exports = function (req, res, next) {
  const ip = req.ip;

  if (bannedIps.includes(ip)) { 
    res.send('You are banned.');
    return; //Will so "you are banned if the "bannedIps" = req.ip.
  }

  next();
};
