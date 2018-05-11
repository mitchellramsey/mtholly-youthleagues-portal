var db = require("../models");
var path = require("path");


module.exports = function(app) {
    
    app.get("/teams", function(req, res) {
        db.Team.findAll({})
        .then(function(dbTeam){
            let teamsObj = {
                teamsList: dbTeam
            }
            console.log(teamsObj);

            res.json(teamsObj);
        });
    });

    app.post('/new-team', function(req, res) {
        console.log(req.body);
        console.log(db.Team);

        console.log(req);
        var team = req.body;
        db.Team.create({
            sport: team.sport,
            coaches: team.coaches,
            kids: team.kids
        }).then(function(result) {
            res.json(result);
        });
    });
};