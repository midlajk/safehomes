const mongoose = require('mongoose');
const User = require('../model/datastructure');
const { MongoClient, ServerApiVersion } = require('mongodb');
const schema1 = new mongoose.Schema({
    name: String,
  });

exports.postlogin = (req, res) => {


          res.redirect('/enquiries');
}
    exports.logout = (req, res, next) => {
      req.session.destroy(err => {
          res.redirect('/login');
      });
  
  }