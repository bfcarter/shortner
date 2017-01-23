const express = require('express');
const apiRouter = require('./api/');
const goRouter = require('./go/');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('/');
});

router.use('/api', apiRouter);
router.use('/go', goRouter);

module.exports = router;
