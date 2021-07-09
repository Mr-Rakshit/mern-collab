var db = require('../models');

exports.addOne = function(req,res) {
    db.Demo.create(req.body)
    .then(function(data) {
        res.json(data);
    })
    .catch(function(error) {
        res.json(error);
    })
}

exports.getAll = function (req,res) {
    db.Demo.find()
    .then(function(data) {
        console.log(data);
        res.json(data);
    })    
    .catch(function(error) {
        res.send(error);
    })
};

exports.makeOne = function(req,res) {
    db.Demo.create(req.body)
    .then(function(newObj) {
        res.status(201).json(newObj);
    })
    .catch(function(err) {
        console.log(err);
    })
}


exports.getOne = function(req,res) {
    db.Demo.findById(req.params.id)
    .then(function(data) {
        res.json(data)
    })
    .catch(function(err) {
        res.send(err);
    })
}

// exports.update = function(req,res) {
//     db.Demo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
//     .then(function(data) {
//         res.json(data);
//     })
//     .catch(function(err) {
//         res.send(err);
//     })
// }

exports.delete = function(req,res) {
    db.Demo.remove({_id: req.params.id})
    .then(function() {
        res.json({message: "Deleted !"});
    })
    .catch(function(err) {
        res.send(err);
    })
}

module.exports = exports;
