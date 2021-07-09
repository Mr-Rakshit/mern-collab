var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Demo',Schema);

/* SCEME 
name
age
email
*/