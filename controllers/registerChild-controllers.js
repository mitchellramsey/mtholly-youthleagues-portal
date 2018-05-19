// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// Validations
const validation = require("../client/src/Shared/Validations/signup");
// Middleware
const middleware = require("../client/src/Shared/Middleware/authenticateMiddleware");
//Kid Model
const { Users, Kids, Sport } = require("../models");


//Register Child POST
router.post("/", (req,res) => {
    const kid = req.body;
    console.log(kid);
    Users.findOne({
        where: {
            id: kid.parentId
        }
    }).then(parent => {
        Kids.create({
            first_name: kid.firstName,
            last_name: kid.lastName,
            age: kid.age,
            gender: kid.gender,
            years_exp: kid.years_exp,
            comments: kid.comments,
            SportId: kid.sport,
            UserId: parent.id
        }).then(newkid => {
            res.json(newkid);
        });

    })
    
    
});

router.get("/:id", (req,res) => {
    console.log("I made it here");
    Users.findOne({
        where: {
            id: req.params.id
        }
    }).then(parent => {
        Kids.findAll({
            where: {
                UserId: parent.id
            },
            include: [Sport]
        }).then(kids => {
            res.json(kids);
        });
    });
});

router.delete("/:id", (req,res) => {
    Kids.destroy({
        where: {
            id: req.params.id
        }
    }).then(kids => {
        res.json(kids);
    });
});

module.exports = router;