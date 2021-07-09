const router = require("express").Router();
const Customer = require("../models/customerModel");
const auth = require("../middleware/auth");

router.get("/", auth, async (req,res) => {
    
})

module.exports = router;