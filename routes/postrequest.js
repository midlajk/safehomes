var express = require('express');
var router = express.Router();
const controller = require('../controller/postrequest');

/* GET home page. */
router.post('/services', controller.postservice);
router.post('/vehicles', controller.postvehicle);
router.post('/addnewrc', controller.addnewrc);

module.exports = router;