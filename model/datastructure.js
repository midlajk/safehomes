
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var clients = new Schema({
    name:String,
    vehiclenumber:String,
    address:String,
    mobile:String,
    rcexpiry:String,
    vehicle:String,
    registrationtype:String,
    vehiclename:String,
    dateentered:Date,
      services:[{
        servicename:String,
        experydate:Date,
        status:String,
        message:String,

        
    }]




});

var Clients =
    mongoose.model('Clients', clients);
module.exports = Clients;


var service = new Schema({
    name:String,
    validity:String,
 
});

var Service =
    mongoose.model('Service', service);
module.exports = Service;

var vehicle = new Schema({
    name:String,
});

var Vehicle =
    mongoose.model('Vehicle', vehicle);
module.exports = Vehicle;

var user = new Schema({
    username:String,
    password:String,
    supscriptions:String,
});

var User =
    mongoose.model('User', user);
module.exports = User;
