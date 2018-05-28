// User Model
const {
	GamesInfo,
	Team
} = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();

// ----------------------------------------------------------------------------------- //
// Finding games related to team
router.get("/:id", (req, res) => {
	Team.findOne({
		where: {
			id: req.params.id
		}
	}).then(team => {
		GamesInfo.findAll({
			where: {
				TeamId: team.id
			}
		}).then(games => {
			res.json(games);
			res.status(200).json({ errors: { form: "The email or password does not match "} })
		})
	});
});

// ----------------------------------------------------------------------------------- //
router.post("/", (req, res) => {

		const { date, time, location, team1, team2, sportId } = req.body;
		// Creating Game Information for Team #1
		Team.findOne({
			where: {
				id: team2
			}
		}).then(opponent => {
			// Game form object
			const data = {
				date: date,
				time: time,
				location: location,
				opponent: opponent.teamName,
				TeamId: team1
			}
		// 	// Create the game for Team #1
			GamesInfo.create(data).then(newGame1 => {
				
				// Create the game information for Team #2
				Team.findOne({
					where: {
						id: team1
					}
				}).then(opponent => {
					// Game form object
					const data = {
						date: date,
						time: time,
						location: location,
						opponent: opponent.teamName,
						TeamId: team2
					}
				// 	// Create the game for Team #2
					GamesInfo.create(data).then(newGame2 => {
						const newGames = {
							newGame1: newGame1,
							newGame2: newGame2
						}
						res.json(newGames);
					});
		
				})
			})
		})		
	})
		
// ----------------------------------------------------------------------------------- //
module.exports = router;