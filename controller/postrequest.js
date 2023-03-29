require('../model/datastructure')
const mongoose = require('mongoose');
const Service = mongoose.model('Service');
const Vehicle = mongoose.model('Vehicle');
const Clients = mongoose.model('Clients');

exports.postservice  = ((req, res, next)=> {

    Service.findOne({name:req.body.name}).then(docs=>{
        if(!docs){

            var data = new Service({
                name:req.body.name.toUpperCase(),
                validity:req.body.validity
            })
            data.save().then(docs=>{
                res.redirect('/services')

            })
                    
        }else{
            res.redirect('/services')

        }
    })
    
})
  
exports.postvehicle  = ((req, res, next)=> {

    Vehicle.findOne({name:req.body.name.toUpperCase()}).then(docs=>{
        if(!docs){

            var data = new Vehicle({
                name:req.body.name.toUpperCase(),
            })
            data.save().then(docs=>{
                res.redirect('/vehicles')

            })
                    
        }else{
            res.redirect('/vehicles')

        }
    })
    
})
  
exports.addnewrc  = ((req, res, next)=> {
    Clients.findOne({vehiclenumber:req.body.data.vehiclenumber}).then(docs=>{
        console.log(docs)
     
        if(!docs){

            var data = new Clients(req.body.data)
            data.save()
            .then(()=>{
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ status: "success"}));   
             }).catch((err)=>{
                console.log(err);
            })
                
            
                    
        }else{

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ status: "Failed"}));
        }
    })
    
})