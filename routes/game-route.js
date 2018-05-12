var db = require("../models");
var path = require("path");


;
module.exports = function(app) {
    app.get("/games", function(req, res) {
        db.GamesInfo.findAll({})
        .then(function(dbGamesInfo){
            let gamesObj = {
                gamesList: dbGamesInfo
            }
            console.log(gamesObj);

            res.json(gamesObj);
        });
    });

    app.post('/add-games', function (req, res) {

		var games = req.body;
		db.GamesInfo.create({
            date: games.date,
            time: games.time,
            location: games.location,
            team1: games.team1,
            team2: games.team2
		}).then(function (result) {
			res.json(result);
		});
	});
};

