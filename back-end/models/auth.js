
// authentication page in data/model.

//require mongoose
var mongoose = require('mongoose');

//Schema structure
var authSchema = mongoose.Schema({
    name : {type : String, required : true},
    emailAddress : {type : String, default : 'me@something.com'},
    password : {type : String},

    // role : {type : Number, required : true (0,1)};

    // What else needs to go here?

});


//??
module.exports = mongoose.model('???', authSchema, '???');
