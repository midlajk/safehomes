var express = require('express');
var router = express.Router();
const controller = require('../controller/postrequest');
const AuthController = require('../controller/authcontroller');
const Posts = require('../controller/postrequest');

/* GET home page. */

router.post('/login', AuthController.postlogin);
router.get('/logout', AuthController.logout);


router.post('/addservice', Posts.addservice);
router.post('/addwebsites', Posts.addWebsites);
router.post('/addwebsites', Posts.addWebsites);
router.post('/enterservice', Posts.enterservice);
router.post('/savedservice', Posts.savedservices);

router.post('/getserviceentries', Posts.getserviceentries);

// router.get('/service', Posts.services);

module.exports = router;