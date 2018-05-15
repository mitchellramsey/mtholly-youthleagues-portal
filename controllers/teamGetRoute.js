// User Model
const {
	Team
} = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// retrieve all teams from data base.
router.get("/", function (req, res) {
	Team.findAll({})
		.then(function (dbTeam) {
			let teamsObj = {
				teamsList: dbTeam
			}
			console.log(teamsObj);

			res.json(teamsObj);
		});
});
// post or add new team to data base.
router.post('/', function (req, res) {

	// Deconstructing the variable
	const {
		sport,
		coaches,
		kids
	} = req.body;
	// searching for all teams
	Team.findAll({})
		.then(function (team) {



			// Team form object
			const data = {
				sport: sport,
				coaches: coaches,
				kids: kids

			}
			// Else, create team
			Team.create(data).then(function (newTeam, created) {
				// If game that already exists
				if (!newTeam) {
					return false;
					console.log("already exists")
				}
				// If new team
				if (newTeam) {
					return newTeam;
				}

			}).then(newTeam => res.json({
				success: true
			}))
		});
});

module.exports = router;