var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', homepageController) {
  res.render('index', { title: 'pavan' });
};

module.exports = router;
