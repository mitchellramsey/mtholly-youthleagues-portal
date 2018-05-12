var db = require("../models");
var path = require("path");


module.exports = function (app) {

	app.get("/sports", function (req, res) {
		db.Sport.findAll({})
			.then(function (dbSport) {
				let sportsObj = {
					sportsList: dbSport
				}
				console.log(sportsObj);

				res.json(sportsObj);
			});
	});

	app.post('/new-sport', function (req, res) {

		var sport = req.body;
		db.Sport.create({
			name: sport.name
		}).then(function (result) {
			res.json(result);
		});
	});
};