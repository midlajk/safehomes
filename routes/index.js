var express = require('express');
var router = express.Router();
require('../model/datastructure')
const mongoose = require('mongoose');
const Clients = mongoose.model('Clients');
const Service = mongoose.model('Service');
const Vehicle = mongoose.model('Vehicle');
const isUser = require('../model/userdatabase');
const schema2 = new mongoose.Schema({
  name:String,
  renewal:Number,
  expense:Number,
  charge:Number,
  website:String,
  description:String,
  tutorial:String,
});
/* GET home page. */

router.get('/login', function(req, res, next) {
  res.render('backend/login', { route: 'Express' });
});


module.exports = router;
