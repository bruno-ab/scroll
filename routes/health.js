var express = require('express');
var router = express.Router();
const logMiddleware = require('../src/middleware/log')
/* GET users listing. */
router.get('/', logMiddleware ,function(req, res, next) {
  res.send('Scroll Ok');
});

module.exports = router;
