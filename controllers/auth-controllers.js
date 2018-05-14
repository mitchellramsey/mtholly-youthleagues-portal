// Dependencies
const express = require("express");
const jwt = require("jsonwebtoken");

//Config
const config = require("../client/src/Shared/Config/config");

// User Model
const { Users } = require("../models");
const bCrypt = require("bcrypt-nodejs");

// Express router
const router = express.Router();

// ----------------------------------------------------------------------------------- //
// Auth route
router.post("/", (req, res) => {
    // Req.body data
    const { email, password } = req.body;
    // Find a User by email
    Users.findOne({
        where: {
            email: email
        } 
    }).then(function(user) {
        // If user is found, compare passwords
        if(user) {
            if(bCrypt.compareSync(password, user.userPassword)) {
                // Apply JWT after log-in
                const token = jwt.sign({
                    id: user.id,
                    username: user.email
                }, config.jwtSecret);
                // Redirect/Add JWT
                res.json({ token })
            } else {
                // Hang, for now
                res.status(401).json({ success: false })
            }
        }
    })
})

// ----------------------------------------------------------------------------------- //
module.exports = router;
