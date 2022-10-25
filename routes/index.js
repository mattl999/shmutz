var express = require('express');
var router = express.Router();
const mainCtrl = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/music', mainCtrl.music);
router.get('/videos', mainCtrl.videos);


module.exports = router;
