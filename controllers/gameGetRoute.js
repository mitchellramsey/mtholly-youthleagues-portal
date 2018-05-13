// User Model
const { GamesInfo } = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();


    router.get("/", function(req, res) {
        GamesInfo.findAll({})
        .then(function(dbGamesInfo){
            
            console.log(dbGamesInfo);

            res.json(dbGamesInfo);
        });
    });

    router.post('/', function (req, res) {
        const { errors, isValid } = validation(req.body);

        
            // Deconstructing the variable
            const { date, time, location, team1, team2 } = req.body;
            // searching for an email
            GamesInfo.findAll({})
            .then(function(games) {
                
    
                
                    // Game form object
                    const data = {
                        date: date,
                        time: time,
                        location: location,
                        team1: team1,
                        team2: team2  
                        
                    }
                    // Else, create user
                    GamesInfo.create(data).then(function(newGame, created) {
                        // If it is a user that already exists
                        if (!newUser) {
                            return false;
                            console.log("already exists")
                        }
                        // If new user
                        if (newUser) {
                            return newUser;
                        }
             
                    }).then(newGame => res.json({ success: true }))
                });
            });
       
           
       

	

    module.exports = router;
