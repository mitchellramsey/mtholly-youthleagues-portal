// Requiring Dependencies
const validator = require("validator");
const isEmpty = require("lodash.isempty");

// Validation function
module.exports = function validateInput(data) {
    let errors = {};

    // Field validator
    // if(validator.isEmpty(data.firstName)) {
    //     errors.firstName = "This field is required.";
    // }

    // // Field validator
    // if(validator.isEmpty(data.firstName)) {
    //     errors.lastName = "This field is required.";
    // }
   

    // // Field validator
    // if(validator.isEmpty(data.phone)) {
    //     errors.phone = "This field is required.";
    // }

    // // Field validator
    // if(validator.isEmpty(data.email)) {
    //     errors.email = "This field is required.";
    // }

    // // If the email doesn't match
    // if(!validator.isEmail(data.email)) {
    //     errors.email = "Email is invalid.";
    // }

    // // Field validator
    // if(validator.isEmpty(data.password)) {
    //     errors.password = "Password is invalid.";
    // }

    // // Field validator
    // if(validator.isEmpty(data.passwordConfirmation)) {
    //     errors.passwordConfirmation = "Password does not match.";
    // }

    // // If passwords are not equal
    // if(!validator.equals(data.password, data.passwordConfirmation)) {
    //     errors.passwordConfirmation = "Passwords do not match.";
    // }

    // // Field validator
    // if(validator.isEmpty(data.address)) {
    //     errors.address = "This field is required.";
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}