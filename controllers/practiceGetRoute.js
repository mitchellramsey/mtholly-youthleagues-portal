// User Model
const {
	Practice
} = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();

router.get("/", function (req, res) {
	Practice.findAll({})
		.then(function (dbPractice) {

			console.log(dbPractice);

			res.json(dbPractice);
		});
});

router.post('/', function (req, res) {

	// Deconstructing the variable
	const {
		date,
		time,
		location,
		team_association
	} = req.body;
	// searching for all practices
	Practice.findAll({})
		.then(function (practice) {



			// Practice form object
			const data = {
				date: date,
				time: time,
				location: location,
				team_association: team_association

			}
			// Else, create practice
			Practice.create(data).then(function (newPractice, created) {
				// If game that already exists
				if (!newPractice) {
					return false;
					console.log("already exists")
				}
				// If new practice
				if (newPractice) {
					return newPractice;
				}

			}).then(newPractice => res.json({
				success: true
			}))
		});
});

module.exports = router;