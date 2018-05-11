var db = require("../models");
var path = require("path");


module.exports = function(app) {
    
    app.get("/sports", function(req, res) {
        db.Practice.findAll({})
        .then(function(dbSport){
            let sportsObj = {
                sportsList: dbSport
            }
            console.log(sportsObj);

            res.json(sportsObj);
        });
    });
};