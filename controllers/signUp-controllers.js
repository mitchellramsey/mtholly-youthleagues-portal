// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// Validations
const validation = require("../client/src/Shared/Validations/signup");
// Middleware
const middleware = require("../client/src/Shared/Middleware/authenticateMiddleware");
// Password encrpytion
const bCrypt = require("bcrypt-nodejs");
// User Model
const { Users } = require("../models");

// User Signup POST
router.post("/", (req, res) => {
    const { errors, isValid } = validation(req.body);

    // If theres an error, send it to the client   
    if (isValid) {
        // Deconstructing the variable
        const { firstName, lastName, email, phone, password, address, city, state, zip, county } = req.body;
        // searching for an email
        Users.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
            // If the email already exists
            if (user) {
                return console.log("That email is already in use.");
            } else {

                // Generating hashed passwords
                const userPassword = bCrypt.hashSync(password);
                // User form object
                const data = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    userPassword: userPassword,  
                    address: address,
                    city: city, 
                    state: state, 
                    zip:  zip,
                    county: county
                }
                // Else, create user
                Users.create(data).then(function(newUser, created) {
                    // If it is a user that already exists
                    if (!newUser) {
                        return false;
                        console.log("already exists")
                    }
                    // If new user
                    if (newUser) {
                        return newUser;
                    }
         
                }).then(newUser => res.json({ success: true }))
            }
        });
    }
});

module.exports = router;