var mongoose = require('mongoose');

const uri = "mongodb+srv://user:user@sandbox.3xwpf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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