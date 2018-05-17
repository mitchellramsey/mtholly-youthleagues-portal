// User Model
const {
	Team,
	Sport
} = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// retrieve all teams from data base.
router.get("/:id", (req, res) => {
    Sport.findOne({
        where: {
            id: req.params.id
        }
    }).then(foundTeams => {
        Team.findAll({
        }).then(teams => {
            res.json(teams);
        })
    });
});


// post or add new team to data base.
router.post("/", (req, res) => {
   


	// Deconstructing the object
	const { sport, coaches, kids, sportId} = req.body;
	
	// Find the associated Id
	Sport.findOne({
		where: {
			id: Team.SportId
		}
	}).then(foundCoach => {
			// Practice form object
			const data = {
				sport: sport,
				coaches: coaches,
				kids: kids,
				SportId: sportId
			}
			// Create the practice
			Team.create(data).then(newTeam => {
				res.json(newTeam);
			})  
		})

});


module.exports = router;