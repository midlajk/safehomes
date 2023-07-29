require('../model/datastructure')
const mongoose = require('mongoose');
const Service = mongoose.model('Service');
const Vehicle = mongoose.model('Vehicle');
const Clients = mongoose.model('Clients');


exports.getenquiries  = ((req, res, next)=> {
  
  res.render('backend/enquiries', { route: 'enquiries' });
        
})
exports.adminmanagement  = ((req, res, next)=> {
  
  res.render('backend/adminmanagement', { route: 'adminmanagement' });
        
})
exports.getproperties  = ((req, res, next)=> {
  res.render('backend/properties', { route: 'properties' });

      
})
exports.getaddproperty  = ((req, res, next)=> {
  res.render('backend/addproperty', { route: 'addproperty' });

      
})
exports.getcategory  = ((req, res, next)=> {
  res.render('backend/category', { route: 'category' });

      
})

exports.getfeatured  = ((req, res, next)=> {
  res.render('backend/featured', { route: 'featured' });

})
exports.getplaces  = ((req, res, next)=> {
  res.render('backend/places', { route: 'places' });

})