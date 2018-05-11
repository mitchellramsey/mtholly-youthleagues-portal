var db = require("../models");
var path = require("path");


module.exports = function(app) {
    
    app.get("/parents", function(req, res) {
        db.Parent.findAll({})
        .then(function(dbParent){
            let parentsObj = {
                parentsList: dbParent
            }
            console.log(parentsObj);

            res.json(parentsObj);
        });
    });
};