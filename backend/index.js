require('dotenv').config();
var express = require('express');
var demoRoutes = require('./routes/demoRoutes');
var bodyParser = require('body-parser');

var app = express();

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/', demoRoutes);

app.get('/', function(req,res) {
    // res.sendFile("index.html");
    res.send("Hello World");
})

app.listen(PORT, function () {
    console.log('App is running on port : ' + PORT);
})
