// Requiring Dependencies
const validator = require("validator");
const isEmpty = require("lodash.isempty");

// Validation function
module.exports = function validateInput(data) {
    let errors = {};

    // Field validator
    if(validator.isEmpty(data.firstName)) {
        errors.firstName = "This field is required.";
    }

    // Field validator
    if(validator.isEmpty(data.lastName)) {
        errors.lastName = "This field is required.";
    }

    // Field validator
    if(validator.isEmpty(data.age)) {
        errors.password = "This field is required.";
    }

    // Field validator
    if(validator.isEmpty(data.gender)) {
        errors.phone = "This field is required.";
    }

    // Field validator
    if(validator.isEmpty(data.sport)) {
        errors.email = "This field is required.";
    }

    // If the email doesn't match
    if(!validator.isEmail(data.years_exp)) {
        errors.email = "Email is invalid.";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}