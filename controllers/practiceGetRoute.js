// User Model
const { Practice } = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
    
    router.get("/", function(req, res) {
        Practice.findAll({})
        .then(function(dbPractice){
          
            console.log(dbPractice);

            res.json(dbPractice);
        });
    });

    router.post('/add-practice', function (req, res) {

		var practice = req.body;
		db.Practice.create({
            date: practice.date,
            time: practice.time,
            location: practice.location,
            team_association: practice.team_association
		}).then(function (result) {
			res.json(result);
		});
	});

    module.exports = router;
