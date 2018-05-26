// Requiring Dependencies
const validator = require("validator");
const isEmpty = require("lodash.isempty");

// Validation function
module.exports = function validateInput(data) {
    let errors = {};

    // Field validator
    if(validator.isEmpty(data.name)) {
        errors.name = "This field is required.";
    } 
   

    return {
        errors,
        isValid: isEmpty(errors)
    }
}