const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CS 412 PS2 - Andy Vo' });
});

module.exports = router;
