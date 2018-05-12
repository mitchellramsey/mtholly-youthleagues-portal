var db = require("../models");
var path = require("path");


module.exports = function(app) {
    
    app.get("/practices", function(req, res) {
        db.Practice.findAll({})
        .then(function(dbPractice){
            let practicesObj = {
                practicesList: dbPractice
            }
            console.log(practicesObj);

            res.json(practicesObj);
        });
    });

    app.post('/add-practice', function (req, res) {

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
};
