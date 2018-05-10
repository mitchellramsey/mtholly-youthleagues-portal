// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// Validations
const validation = require("../Shared/Validations/signup");

// User Signup POST
router.post("/", (req, res) => {
    const { errors, isValid } = validation(req.body);

    // If theres an error, send it to the client   
    if (isValid) {
        res.json({ success: true})
    } else {
        res.status(400).json(errors)
    }
});

module.exports = router;