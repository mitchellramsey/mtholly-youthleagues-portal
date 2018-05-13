// User Model
const { Sport } = require("../models");
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

	router.post('/new-sport', function (req, res) {

		var sport = req.body;
		db.Sport.create({
			name: sport.name
		}).then(function (result) {
			res.json(result);
		});
	});

	module.exports = router;

