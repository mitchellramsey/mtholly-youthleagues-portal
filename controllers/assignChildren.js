// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// Validations
const validation = require("../client/src/Shared/Validations/signup");
// Middleware
const middleware = require("../client/src/Shared/Middleware/authenticateMiddleware");
//Kid Model
const { Users, Kids, Sport, Coach } = require("../models");

// ----------------------------------------------------------------------------------- //
router.get("/:sportId", (req,res) => {
 
    Kids.findAll({
        where: {
            SportId: req.params.sportId,
            TeamId: null
        }
    }).then(kids => {
            
            res.json(kids);
        });
    });

    // ----------------------------------------------------------------------------------- //
router.put("/", (req,res) => {
    const { playerId , teamId } = req.body;

    Kids.update({
        TeamId: teamId
    }, {
        where: {
            id: playerId
        }
    }).then(kids => {
        res.json(kids);
    })
});
        
// ----------------------------------------------------------------------------------- //
module.exports = router;