const express = require('express');
const urlsRouter = require('./urls/');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('/');
});

router.use('/urls', urlsRouter);

module.exports = router;
