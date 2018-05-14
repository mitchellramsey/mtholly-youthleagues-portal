// User Model
const { Coach } = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();

    router.get("/", function(req, res) {
        Coach.findAll({
            where: {
                TeamId: TeamId
            }
        })
        .then(function(dbCoach){
           
            console.log(coachesObj);

            res.json(dbCoach);
        });
    });

    module.exports = router;
