// User Model
const {	Sport } = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();

router.get("/", function (req, res) {
	Sport.findAll({})
		.then(function (dbSport) {

			res.json(dbSport);
		});
});

router.post('/', function (req, res) {

	// Deconstructing the variable
	const {	name } = req.body;
	// creating a sport
	Sport.create({
		name:name
	}).then(function (sports) {
		res.json(sports);
	})
});




module.exports = router;