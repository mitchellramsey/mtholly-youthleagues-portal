// User Model
const {
	Manager
} = require("../models");
// Dependencies
const express = require("express");
// Express Router
const router = express.Router();


router.get("/", function (req, res) {
	Manager.findAll({})
		.then(function (dbManager) {

			console.log(dbManager);

			res.json(dbManager);
		});
});

router.post('/', function (req, res) {

	// Deconstructing the variable
	const {
		firstName,
		lastName,
		userPassword,
		phone,
		managerId
	} = req.body;
	// searching for all managers
	Manager.findAll({})
		.then(function (games) {



			// Manager form object
			const data = {
				firstName: firstName,
				lastName: lastName,
				userPassword: userPassword,
				phone: phone,
				managerId: managerId

			}
			// Else, create Manager
			Manager.create(data).then(function (newManager, created) {
				// If manager that already exists
				if (!newManager) {
					return false;
					console.log("already exists")
				}
				// If new manager
				if (newManager) {
					return newManager;
				}

			}).then(newManager => res.json({
				success: true
			}))
		});
});






module.exports = router;