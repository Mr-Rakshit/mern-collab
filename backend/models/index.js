var mongoose = require('mongoose');


const uri = process.env.DB_URI;
console.log(uri);
mongoose.set('debug',true);
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})
.then(() => {
    console.log('Connection estabislished with MongoDB');
})
.catch(error => console.error(error.message));

mongoose.Promise = Promise;

module.exports.Demo = require('./db');