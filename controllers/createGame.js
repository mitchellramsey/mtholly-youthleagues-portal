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
        GamesInfo.findAll({
        }).then(games => {
            res.json(games);
        })
    });
});

router.post("/", (req, res) => {
   


        // Deconstructing the object
        const { date, time, location, team1, team2, teamId} = req.body;
        
        // Find the associated Id
        Team.findOne({
            where: {
                id: GamesInfo.TeamId
            }
        }).then(foundCoach => {
                // Practice form object
                const data = {
                    date: date,
                    time: time,
                    location: location,
					team1: team1,
					team2: team2,
                    TeamId: teamId
                }
                // Create the practice
                GamesInfo.create(data).then(newGame => {
                    res.json(newGame);
                })  
            })
   
});





module.exports = router;