var mongoose = require('mongoose');


<<<<<<< HEAD
const uri = "mongodb+srv://user:user@sandbox.3xwpf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
=======
const uri = process.env.DB_URI;
>>>>>>> 2e277e41eff7a6a876bc228cabdeefe0c091cdc5
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