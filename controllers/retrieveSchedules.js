// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// Validations
const validation = require("../client/src/Shared/Validations/createPractice");

// User Model
const {
	GamesInfo,
	Coach,
	Team
} = require("../models");

// ----------------------------------------------------------------------------------- //
// Retrieve teams assigned from coaches
router.get("/:TeamId", (req, res) => {
    Team.findOne({
        where: {
            id: req.params.TeamId
        }
    }).then(foundId =>  {
        GamesInfo.findAll({
            where: {
                TeamId: foundId.id
            }
        }).then(foundGame => {
            res.json(foundGame)
        });
        console.log(foundId);
    }); 
});
// ----------------------------------------------------------------------------------- //
module.exports = router;