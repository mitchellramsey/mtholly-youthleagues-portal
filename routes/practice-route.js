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
};