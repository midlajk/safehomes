var express = require('express');
var router = express.Router();
require('../model/datastructure')
const mongoose = require('mongoose');
const Clients = mongoose.model('Clients');
const Service = mongoose.model('Service');
const Vehicle = mongoose.model('Vehicle');

/* GET home page. */

router.get('/login', function(req, res, next) {
  res.render('login', { route: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { route: 'dashboard' });
});
router.get('/addnewrc', function(req, res, next) {
  res.render('addnewrc', { route: '/rcedit' });
});
router.get('/clients', function(req, res, next) {
  Clients.find().then(docs=>{
    res.render('clients', { route: 'clients',docs:docs });

  })
});
router.get('/deadlines', function(req, res, next) {
  var date = new Date()
  var threshold = date.setDate(date.getDate()+11)
//   Clients.aggregate([{$unwind:"$services"},{
//     $match: {
//         "services.experydate": {
//             $lt: new Date(threshold),
            
//         }
//     }
// }]).then(docs=>{
//   console.log(docs)
//     res.render('deadlines', { route: 'deadlines',docs });

//   })
 Clients.aggregate([
        {
           $project: {
            "name": 1,  
            "vehiclenumber": 1,  
            "mobile": 1,  
            "vehicle": 1,  
            "vehiclename": 1,  
              details: {
                 $filter: {
                    input: "$services",
                    as: "out",
                    cond:{ $and:[{$lt:["$$out.experydate",new Date(threshold)]},{$eq:["$$out.status",'Active']}] },
                

                 }
              }
           }
        },
        { $unwind: "$details" },
     ]).then(docs=>{
      res.render('deadlines', { route: 'deadlines',docs });

  })

});

router.get('/pendingenquiries', function(req, res, next) {
  Clients.aggregate([
    {
       $project: {
        "name": 1,  
        "vehiclenumber": 1,  
        "mobile": 1,  
          details: {
             $filter: {
                input: "$services",
                as: "out",
                cond:{ $ne:["$$out.status",'Active']},
            

             }
          }
       }
    },
    { $unwind: "$details" },
 ]).then(docs=>{
  res.render('pending', { route: 'pendingenquiries',docs:docs });

})
});
router.get('/vehicles', function(req, res, next) {
  Vehicle.find().then(docs=>{
    res.render('vehicles', { route: 'vehicles',
  docs:docs });

  })
});
router.get('/services', function(req, res, next) {
  Service.find().then(docs=>{
    res.render('services', { route: 'services',
  docs:docs });

  })
});
module.exports = router;
