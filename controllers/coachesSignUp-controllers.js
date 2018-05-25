// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// Validations
const validation = require("../client/src/Shared/Validations/coachessignup");
// Middleware
const middleware = require("../client/src/Shared/Middleware/authenticateMiddleware");
// Password encrpytion
const bCrypt = require("bcrypt-nodejs");
// User Model
const { Coach } = require("../models");

// ----------------------------------------------------------------------------------- //
// User Signup POST
router.post("/", (req, res) => {
    const { errors, isValid } = validation(req.body);

    // If theres an error, send it to the client   
    if (isValid) {
        // Deconstructing the variable
        const { first_name, last_name, email, phone, password, address, city, state, zip, sport } = req.body;
        // searching for an email
        Coach.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
            // If the email already exists
            if (user) {
                res.status(400).json(errors);
            } else {

                // Generating hashed passwords
                const userPassword = bCrypt.hashSync(password);
                // User form object
                const data = {
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    phone: phone,
                    password: userPassword,  
                    address: address,
                    city: city, 
                    state: state, 
                    zip:  zip,
                    SportId: sport
                }
                // Else, create user
                Coach.create(data).then(function(newUser, created) {
                    // If new user
                    if (newUser) {
                        return newUser;
                    }
         
                }).then(newUser => res.json({ success: true }))
                    // Catch errors
                    .catch(err => console.log(err));
            }
        })
    }   else if(!isValid) {
        // send errors
        res.status(400).json(errors);
    }
});

// ----------------------------------------------------------------------------------- //

// Route to check if an already exists during sign up - This activates OnBlur with the email field
router.get("/:query", (req, res) => {
    // Find the passed parameter within the email column
    Coach.findOne({
        where: {
            email: req.params.query
        }
        // If it exists send that user email back
    }).then(user => {
        res.json({ user });
    })
});

// ----------------------------------------------------------------------------------- //
module.exports = router;