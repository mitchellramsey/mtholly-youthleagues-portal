// User Model
const { Admin } = require("../models");


//Seed Data for Admin Login
Admin.destroy({
    where: {},
    truncate: true
    }).then(() => Admin.create({
        firstName: "League",
        lastName: "Manager",
        userPassword: "admin",
        phone: "777-777-7777",
        email: "admin@leaguemanager.com"
    }));