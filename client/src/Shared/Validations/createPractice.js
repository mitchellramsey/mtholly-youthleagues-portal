// Requiring Dependencies
const validator = require("validator");
const isEmpty = require("lodash.isempty");

// Validation function
module.exports = function validateInput(data) {
    let errors = {};

    // Field validator
    if(validator.isEmpty(data.date)) {
        errors.date = "This field is required.";
    }

    // Field validator
    if(validator.isEmpty(data.time)) {
        errors.time = "This field is required.";
    }
   

    // Field validator
    if(validator.isEmpty(data.location)) {
        errors.location = "This field is required.";
    }

    // Field validator
    if(validator.isEmpty(data.team_association)) {
        errors.team_association = "This field is required.";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}