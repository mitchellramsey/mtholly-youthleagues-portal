// Dependencies
const express = require("express");
const jwt = require("jsonwebtoken");

//Config
const config = require("../client/src/Shared/Config/config");

// User Model
const { Admin } = require("../models");
const bCrypt = require("bcrypt-nodejs");

// Express router
const router = express.Router();

// ----------------------------------------------------------------------------------- //
// Auth route
router.post("/", (req, res) => {
    // Req.body data
    console.log(req.body);
    const { email, password } = req.body;
    // Find a Coach by email
    Admin.findOne({
        where: {
            email: email,
            userPassword: password
        } 
    }).then(admin => {
        console.log("I passed the if statement");
        console.log("ADMIN:");
        console.log(admin);
        // Apply JWT after log-in
        const token = jwt.sign({
            id: admin.id,
            username: admin.email
            }, config.jwtSecret);
            // Redirect/Add JWT
            res.json({ token })
        })
    })


// ----------------------------------------------------------------------------------- //
module.exports = router;