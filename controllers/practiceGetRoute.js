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

module.exports = router;
