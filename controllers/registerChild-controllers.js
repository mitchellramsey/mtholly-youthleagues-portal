// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// Validations
const validation = require("../client/src/Shared/Validations/signup");
// Middleware
const middleware = require("../client/src/Shared/Middleware/authenticateMiddleware");
//Kid Model
const { Users } = require("../models");

//Register Child POST
router.post("/", (req,res) => {
    console.log(req.body);
    Users.findAll({
    }).then(function(user) {
        // If user is found, compare passwords
        if(user) {
            // console.log(user.username) 
        } else {
            console.log("fal");
        }
    })
});

module.exports = router;