// User Model
const {
	Team,
	Sport
} = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// retrieve all sports from data base.
router.get("/:id", (req, res) => {
	Sport.findOne({
		where: {
			id: req.params.id
		}
	}).then(foundTeams => {
		Team.findAll({}).then(teams => {
			res.json(teams);
		})
	});
});


// post or add new sport to data base.
router.post("/", (req, res) => {
	//Deconstructing the variable
	const { sportID, teamName } = req.body;
	console.log(req.body);
	console.log(`Sport ID: ${sportID}` )
	//Creating a Team
	Team.create({
		teamName:teamName,
		SportId: sportID
	}).then(function (sports) {
		res.json(sports);
	})

});


module.exports = router;