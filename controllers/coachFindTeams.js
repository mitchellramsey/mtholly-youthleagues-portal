// User Model
const {
	Team,
	Coach
} = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();

// ----------------------------------------------------------------------------------- //
// retrieve all sports from data base.
router.get("/:id", (req, res) => {
	Coach.findOne({
		where: {
			id: req.params.id
        },
        include: [
            Team
        ]
	}).then(coachInfo => {
        console.log(coachInfo)
			res.json(coachInfo);
		})
    });
    
// ----------------------------------------------------------------------------------- //
module.exports = router;