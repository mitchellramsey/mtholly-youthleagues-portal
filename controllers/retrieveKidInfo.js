// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// Validations
const validation = require("../client/src/Shared/Validations/signup");
// Middleware
const middleware = require("../client/src/Shared/Middleware/authenticateMiddleware");
//Kid Model
const { Users, Kids, Sport, Team, GamesInfo, Practice } = require("../models");

// ----------------------------------------------------------------------------------- //
// Retrieve Kid info
router.get("/:kidId", (req,res) => {
    let data = [];
    const kidId = req.params.kidId;
    
    Kids.findOne({
        where: {
             id: kidId
        },
        include: [Team, Sport]
    }).then(kid => {
        data.push(kid);
        if(kid.Team === null) {
            res.json(data);
        } else {
            GamesInfo.findAll({
                where: {
                    TeamId: kid.Team.id
                }
            }).then(games => {
                data.push(games);
                Practice.findAll({
                    where: {
                        TeamId: kid.Team.id
                    }
                }).then(practices => {
                    data.push(practices);
                    res.json(data);
                })
            })
        }
    });
    
});

// ----------------------------------------------------------------------------------- //
module.exports = router;