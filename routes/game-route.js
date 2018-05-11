var db = require("../models");
var path = require("path")
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
};