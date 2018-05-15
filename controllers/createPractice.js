// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// Validations
const validation = require("../client/src/Shared/Validations/createPractice");

// User Model
const { Practice } = require("../models");

// ----------------------------------------------------------------------------------- //
// create new practice POST
router.post("/", (req, res) => {
    const { errors, isValid } = validation(req.body);

    // If theres an error, send it to the client   
    if (isValid) {
        // Deconstructing the object
        const { date, time, location,  team_association} = req.body;
        
        // User form object
        const data = {
            date: date,
            time: time,
            location: location,
            team_association: team_association
        }
            
        // Create a new practice
        Practice.create(data).then(newPractice => {
            res.json({ sucess: true })
        })
            
        
    }
});

// ----------------------------------------------------------------------------------- //
module.exports = router;
