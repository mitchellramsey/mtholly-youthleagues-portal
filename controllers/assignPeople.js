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
    console.log("I made it here");
    Kids.findAll({
        where: {
            SportId: req.params.id
        }
    }).then(kids => {
            res.json(kids);
        });
    });

router.get("/:sportId", (req,res) => {
    console.log("I made it here");
    Coach.findAll({
        where: {
            SportId: req.params.id
        }
    }).then(coach => {
        res.json(coach);
        });
    });












module.exports = router;