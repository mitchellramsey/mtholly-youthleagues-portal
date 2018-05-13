// User Model
const { Team } = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
	// retrieve all teams from data base.
	router.get("/teams", function (req, res) {
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
	router.post('/new-team', function (req, res) {

		var team = req.body;
		db.Team.create({
			sport: team.sport,
			coaches: team.coaches,
			kids: team.kids
		}).then(function (result) {
			res.json(result);
		});
	});

module.exports = router;
