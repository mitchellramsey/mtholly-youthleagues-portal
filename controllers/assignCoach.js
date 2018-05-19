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



router.get("/:sportId", (req,res) => {
    Coach.findAll({
        where: {
            SportId: req.params.sportId,
            TeamId: null
        }
    }).then(coach => {
        res.json(coach);
        });
});

router.put("/", (req,res) => {
    const { coachId , teamId } = req.body;

    Coach.update({
        TeamId: teamId
    }, {
        where: {
            id: coachId
        }
    }).then(coach => {
        res.json(coach);
    })
});



module.exports = router;