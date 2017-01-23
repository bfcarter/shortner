const express = require('express');
const models = require('../../../../models/');
const getRandomText = require('../../../../controllers/getRandomText.js');
const debugCtrl = require('../../../../controllers/debugger.js');

const router = express.Router();

router.post('/', (req, res) => {
  const url = req.body.url;

  const randText = getRandomText(9);
  const shorturl = '/go/' + randText;

  models.shortUrl.create({
    id: randText,
    realUrl: url,
  }).then(() => {
    res.json({
      message: 'Your shortened url for ' + url + ' is ' + shorturl,
      shortUrl: shorturl,
      id: randText,
      error: false,
    });
  }).catch(() => {
    res.json({
      error: true,
    });
    debugCtrl.debug('error', 'Error. Path: ' + req.originalUrl + '. Failed to create a shorturl. Body: ' + JSON.stringify(req.body));
  });
});

router.get('/', (req, res) => {
  models.shortUrl.findAll().then((shortUrls) => {
    res.json({
      data: shortUrls,
      error: false,
    });
  }).catch(() => {
    res.json({
      error: true,
    });
    debugCtrl.debug('error', 'Error. Path: ' + req.originalUrl + '. Failed to find all shorturls.');
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  models.shortUrl.findOne({
    where: { id },
  }).then((shortUrl) => {
    res.json({
      data: shortUrl,
      error: false,
    });
  }).catch(() => {
    res.json({
      error: true,
    });
    debugCtrl.debug('error', 'Error. Path: ' + req.originalUrl + '. Failed to find shorturl of id ' + id + '.');
  });
});

router.post('/:id', (req, res) => {
  const id = req.params.id;
  const url = req.body.url;

  models.shortUrl.update({
    realUrl: url,
  }, {
    where: {
      id,
    },
  })
        .then(() => {
          res.json({
            error: false,
          });
        }).catch(() => {
          res.json({
            error: true,
          });
          debugCtrl.debug('error', 'Error. Path: ' + req.originalUrl + ". Failed to update shorturl's(of id " + id + ') url to ' + url + '.');
        });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  models.shortUrl.findOne({
    where: { id },
  }).then((shortUrl) => {
    if (!shortUrl) {
      res.json({
        error: true,
      });
      debugCtrl.debug('warning', 'Warning. Path: ' + req.originalUrl + ". Didn't find a shorturl of id " + id + '. Failed to delete.');
      return;
    }

    shortUrl.destroy().then(() => {
      res.json({
        error: false,
      });
    }).catch(() => {
      res.json({
        error: true,
      });
      debugCtrl.debug('error', 'Error. Path: ' + req.originalUrl + '. Failed to delete a shorturl of id ' + id + '.');
    });
  }).catch(() => {
    res.json({
      error: true,
    });
    debugCtrl.debug('error', 'Error. Path: ' + req.originalUrl + '. Failed to find a shorturl of id ' + id + '.');
  });
});

module.exports = router;
