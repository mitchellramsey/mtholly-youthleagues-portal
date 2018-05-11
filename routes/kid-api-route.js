var db = require("../models");
var path = require("path");


module.exports = function(app) {
    
    app.get("/kids", function(req, res) {
        db.Kids.findAll({})
        .then(function(dbKids){
            let kidsObj = {
                kidsList: dbKids
            }
            console.log(kidsObj);

            res.json(kidsObj);
        });
    });
};