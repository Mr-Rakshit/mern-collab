var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/demoHelp")

router.route('/')
    .post(helpers.makeOne)

router.route('/signup')
    .post(helpers.addOne)

router.route('/userdata')
    .get(helpers.getAll)

router.route('/:id')
    .get(helpers.getOne)
    .delete(helpers.delete)

module.exports = router;