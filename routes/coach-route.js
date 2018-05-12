var db = require("../models");
var path = require("path")
;
module.exports = function(app) {
    app.get("/coaches", function(req, res) {
        db.Coach.findAll({
            where: {
                TeamId: TeamId
            }
        })
        .then(function(dbCoach){
            let coachesObj = {
                coachesList: dbCoach
            }
            console.log(coachesObj);

            res.json(coachesObj);
        });
    });
};