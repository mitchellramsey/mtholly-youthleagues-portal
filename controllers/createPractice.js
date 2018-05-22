// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// Validations
const validation = require("../client/src/Shared/Validations/createPractice");

// User Model
const {
	Practice,
	Coach,
	Team
} = require("../models");

// ----------------------------------------------------------------------------------- //
// create new practice POST
router.post("/", (req, res) => {
	console.log(req.body);
	const {
		errors,
		isValid
	} = validation(req.body);

	// If theres an error, send it to the client   
	if (isValid) {
		// Deconstructing the object
		const {
			date,
			time,
			location,
			team,
			coachId
		} = req.body;

		// Find the associated Id
		Coach.findOne({
			where: {
				id: Practice.CoachId
			}
		}).then(foundCoach => {
			// Practice form object
			const data = {
				date: date,
				time: time,
				location: location,
				TeamId: team,
				CoachId: coachId
			}

			console.log(data);
			// Create the practice
			Practice.create(data).then(newPractice => {
				res.json(newPractice);
			})
		})
	}
});

// ----------------------------------------------------------------------------------- //
// Practice GET route

// Find practices by coach Id
router.get("/:id", (req, res) => {
	Coach.findOne({
		where: {
			id: req.params.id
		}
	}).then(foundPractices => {
		Practice.findAll({
			include: [
				Team
			]
		}).then(practices => {
			res.json(practices);
		})
	});
});


// ----------------------------------------------------------------------------------- //
// Delete a practice

router.delete("/:id", (req, res) => {
	Practice.destroy({
		where: {
			id: req.params.id
		}
	}).then(practices => {
		res.json(practices);
	});
});

// ----------------------------------------------------------------------------------- //
router.get("/:id", (req, res) => {
	Coach.findOne({
		where: {
			id: req.params.id
		},
		include: [
			Team
		]
	}).then(teams => {
		res.json(teams);
		console.log(teams);
	});
});





// ----------------------------------------------------------------------------------- //
module.exports = router;