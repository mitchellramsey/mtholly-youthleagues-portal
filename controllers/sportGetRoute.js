// User Model
const {
	Sport
} = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();

router.get("/sports", function (req, res) {
	Sport.findAll({})
		.then(function (dbSport) {

			console.log(dbSport);

			res.json(dbSport);
		});
});

router.post('/', function (req, res) {

	// Deconstructing the variable
	const {
		name
	} = req.body;
	// searching for all sports
	Sport.findAll({})
		.then(function (sports) {



			// Sport form object
			const data = {
				name: name
			}
			// Else, create user
			Sport.create(data).then(function (newSport, created) {
				// If Sport that already exists
				if (!newSport) {
					return false;
					console.log("already exists")
				}
				// If new sport
				if (newSport) {
					return newSport;
				}

			}).then(newSport => res.json({
				success: true
			}))
		});
});

module.exports = router;