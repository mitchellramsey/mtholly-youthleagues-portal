// User Model
const {
	GamesInfo,
	Team
} = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();


router.get("/:id", (req, res) => {
	Team.findOne({
		where: {
			id: req.params.id
		}
	}).then(foundGames => {
		GamesInfo.findAll({}).then(games => {
			res.json(games);
		})
	});
});

router.post("/", (req, res) => {

	const {
		errors,
		isValid
	} = validation(req.body);

	// If theres an error, send it to the client   
	if (isValid) {
		// Deconstructing the object
		const {
			date,
			time,
			location,
			team1,
			team2,
			sportId
		} = req.body;

		// Find the associated Id
		Team.findOne({
			where: {
				id: GamesInfo.SportId
			}
		}).then(foundGame => {
			// Game form object
			const data = {
				date: date,
				time: time,
				location: location
			}
			// Create the game
			GamesInfo.create(data).then(newGame => {
				res.json(newGame);
			})
		})
	}
});





module.exports = router;