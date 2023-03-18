var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/login', function(req, res, next) {
  res.render('login', { ab: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { ab: 'Express' });
});
router.get('/addnewrc', function(req, res, next) {
  res.render('addnewrc', { ab: '/rcedit' });
});
router.get('/clients', function(req, res, next) {
  res.render('clients', { ab: 'Express' });
});
router.get('/deadlines', function(req, res, next) {
  res.render('deadlines', { ab: 'Express' });
});
router.get('/pendingenquiries', function(req, res, next) {
  res.render('pending', { ab: 'Express' });
});

module.exports = router;
