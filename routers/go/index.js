const express = require('express');
const models = require('../../models/');
const debugCtrl = require('../../controllers/debugger.js');

const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;

  models.shortUrl.findOne({
    where: { id },
  }).then((shortUrl) => {
    res.redirect(shortUrl.realUrl);
  }).catch(() => {
    res.send('Error on redirecting.');
    debugCtrl.debug('error', 'Error. Path: ' + req.originalUrl + '. Failed to find a shorturl of id ' + id + '.');
  });
});

module.exports = router;
