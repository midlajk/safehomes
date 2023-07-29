var express = require('express');
var router = express.Router();
const Getrequest = require('../controller/getrequests');

/* GET home page. */

router.get('/enquiries', Getrequest.getenquiries);
router.get('/adminmanagement', Getrequest.adminmanagement);


router.get('/addproperty', Getrequest.getaddproperty);

router.get('/properties', Getrequest.getproperties);
router.get('/category', Getrequest.getcategory);
router.get('/places', Getrequest.getplaces);



router.get('/featured', Getrequest.getfeatured);


module.exports = router;