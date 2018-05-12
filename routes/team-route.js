var db = require("../models");
var path = require("path");



module.exports = function (app) {
	// retrieve all teams from data base.
	app.get("/teams", function (req, res) {
		db.Team.findAll({})
			.then(function (dbTeam) {
				let teamsObj = {
					teamsList: dbTeam
				}
				console.log(teamsObj);

				res.json(teamsObj);
			});
	});
	// post or add new team to data base.
	app.post('/new-team', function (req, res) {

		var team = req.body;
		db.Team.create({
			sport: team.sport,
			coaches: team.coaches,
			kids: team.kids
		}).then(function (result) {
			res.json(result);
		});
	});
};

