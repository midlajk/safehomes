require('../model/datastructure')
const mongoose = require('mongoose');

const schema2 = new mongoose.Schema({
    name:String,
    renewal:Number,
    expense:Number,
    charge:Number,
    website:String,
    description:String,
    tutorial:String,
  });
const webs = new mongoose.Schema({
    name:String,
    link:String,
    description:String,
    username:String,
    password:String
  });
  const serviceentry = new mongoose.Schema({
    name:Date,
    name:String,
    identity:String,
    mobile:String,
    address:String,
    description:String,
    debit:Number,
    credit:Number,
    status:String,
    referenceid:String,
    completedecription:String
  });

  const reports = new mongoose.Schema({
    date:Date,
    reference:String,
    credit:Number,
    debit:Number,
    mode:String,
    referenceid:String,
  });
  const pendingservices = new mongoose.Schema({
    servicename:String,
    date:Date,
    name:String,
    identity:String,
    mobile:String,
    address:String,
    description:String,
    debit:Number,
    credit:Number,
    status:String,
  });

exports.addservice  = ((req, res, next)=> {
    console.log(req.body,req.session.user)
    const db2 = mongoose.createConnection(`mongodb://localhost:27017/${req.session.user._id}`, { useNewUrlParser: true, useUnifiedTopology: true })
    const ModalService = db2.model('Services', schema2);
    const service = new ModalService({
        name:req.body.name,
        renewal:req.body.renewal,
        expense:req.body.expense,
        charge:req.body.charge,
        website:req.body.website,
        description:req.body.description,
        tutorial:req.body.tutorial,
          });
    service.save().then(docs=>{
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ docs: docs }));
        })
})
  
exports.services  = ((req, res, next)=> {
    console.log('here')
    
    
        
})

exports.addWebsites  = ((req, res, next)=> {
    console.log('abcd')
    const db2 = mongoose.createConnection(`mongodb://localhost:27017/${req.session.user._id}`, { useNewUrlParser: true, useUnifiedTopology: true })
    const ModalWebsites = db2.model('Websites', webs);
    const website = new ModalWebsites({
        name:req.body.name,
        link:req.body.link,
        description:req.body.description,
        username:req.body.username,
        password:req.body.password,

          });
          website.save().then(docs=>{
            console.log(docs)
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ docs: docs }));
        })
})
  

exports.enterservice  = ((req, res, next)=> {
  console.log(req.body)
  const db2 = mongoose.createConnection(`mongodb://localhost:27017/${req.session.user._id}`, { useNewUrlParser: true, useUnifiedTopology: true })
  const Serviceentry = db2.model(req.body.servicename, serviceentry);
  const serv = new Serviceentry({
    name: req.body.name,
    identity: req.body.registration,
    credit: 90,
    debit: 90,
    mobile: req.body.mobile,
    description: req.body.decription,
    address: req.body.address,
    paymentmode: req.body.paymentmode,
    status: req.body.status,
    referenceid:req.body.referenceid,
    completedecription:req.body.completedecription

        });
       serv.save().then(docs=>{

      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ docs: docs }));
       })
})

exports.savedservices  = ((req, res, next)=> {
  console.log('saved')
  const db2 = mongoose.createConnection(`mongodb://localhost:27017/${req.session.user._id}`, { useNewUrlParser: true, useUnifiedTopology: true })
  const Serviceentry = db2.model('Pending', pendingservices);
  const serv = new Serviceentry({
    servicename:req.body.servicename,
    name: req.body.name,
    identity: req.body.registration,
    credit: 90,
    debit: 90,
    mobile: req.body.mobile,
    description: req.body.decription,
    address: req.body.address,
    paymentmode: req.body.paymentmode,
    status: req.body.status,
  

        });
       serv.save().then(docs=>{

      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ docs: docs }));
       })
})

exports.getserviceentries  = ((req, res, next)=> {
  const db2 = mongoose.createConnection(`mongodb://localhost:27017/${req.session.user._id}`, { useNewUrlParser: true, useUnifiedTopology: true })
  const Serviceentry = db2.model(req.body.db, serviceentry);
  const PendingService = db2.model(req.body.db, serviceentry);

  Serviceentry.find().then(async docs => {
    const pending = await PendingService.find();

    const combinedArray = [...pending, ...docs]

      res.setHeader('Content-Type', 'application/json'); // Set the Content-Type header to indicate JSON response
      res.json({ docs: combinedArray }); // Send the JSON response
    }).catch(err => {
      // Handle any errors that occur during the database query
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
      
})