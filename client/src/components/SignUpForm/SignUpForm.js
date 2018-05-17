// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// Component
import TextFieldGroup from "../TextFieldGroup/TextFieldGroup";

// CSS
import "../../components/LogInForm/loginform.css";

// Actions
import validateInput from "../../Shared/Validations/signup";

// ----------------------------------------------------------------------------------- //
// Creating the Signup form
class SignupForm extends Component {

    constructor(props) {
        super(props);
            // Setting state
            this.state = {
                firstName: "",
                lastName: "",
                phone: "", 
                password: "",
                passwordConfirmation: "",
                email: "",
                address: "",
                zip: "",
                city: "",
                state: "",
                county: "",
                errors: {}
            };
        
        // Binding form submittion and input change to "this" specific one
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.checkUser = this.checkUser.bind(this);
    }

    // Capturing form input
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    // If state is true, run this function
    isValid() {
       const {errors, isValid } = validateInput(this.state);
    // If state is false, set errors
       if(!isValid) {
           this.setState({ errors })
       }
       // Getting the boolean value back    
       return isValid;
    }

    // Checking if user exists
    checkUser = event => {
        // Email field
        const field = event.target.name;
        // Value
        const value = event.target.value;
        // If value doesnt equal an empty string, run this
        if(value !== "") {
            this.props.isUserExists(value).then(res => {
                // Defining errors
                let errors = this.state.errors;
                let invalid;
                // If error
                if(res.data.user) {
                    // set error
                    errors[field] = "This email is already taken";
                } else {
                    // Leave the field empty
                    errors[field] = "";
                }
                // Set State with errors
                this.setState({ errors, invalid });
            });
        }
    }

    // On form submit
    handleFormSubmit = event => {
        // Preventing default form behavior
        event.preventDefault();
        // When the form is submitted, reset any stored errors and disable the submit button during load time
        // To prevent multiple events
        // If state is valid, perform the AJAX request
        if(this.isValid()) {
            this.setState({ errors: {}, isLoading: true });

            this.props.userSignupRequest(this.state).then(
                // Then, redirect
                () => {
                    this.props.addFlashMessage({
                        type: "Success",
                        text: "You have signed up successfully, Welcome. Please Log-In to continue"
                    });
                    this.props.history.push("/") 
                },
                // Setting errors
                (err) => this.setState({ errors: err.response.data, isLoading: false })            
            );
        }
    };

    // Render the form
    render() {
        // Setting the errors object
        const { errors } = this.state;

        return(
            <div className="col-md-6 text-center mx-auto">
                <h3>Sign-up Form</h3>
                {/* Sign Up Form */}
                    <form className="form" onSubmit={this.handleFormSubmit}>
                        {/* First Name */}
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.firstName}
                            label="First Name"
                            type="text"
                            field="firstName"
                            className="form-control"
                            value={this.state.firstName}
                            placeholder="First Name"
                        />

                        {/* Last Name */}
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.lastName}
                            label="Last Name"
                            type="text"
                            field="lastName"
                            className="form-control"
                            value={this.state.lastName}
                            placeholder="Last Name"
                        />

                        {/* Password */}
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.password}
                            label="Password"
                            type="password"
                            field="password"
                            className="form-control"
                            value={this.state.password}
                            placeholder="Password"
                        />
                        {/* Password Confirmation */}
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.passwordConfirmation}
                            label="Password Confirmation"
                            type="password"
                            field="passwordConfirmation"
                            className="form-control"
                            value={this.state.passwordConfirmation}
                            placeholder="Password Confirmation"
                        />

                        {/* Phone */}
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.phone}
                            label="Phone"
                            type="text"
                            field="phone"
                            className="form-control"
                            value={this.state.phone}
                            placeholder="Phone"
                        />
                        {/* Email */}
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            checkUser={this.checkUser}
                            errors={errors.email}
                            label="Email"
                            type="text"
                            field="email"
                            className="form-control address"
                            value={this.state.email}
                            placeholder="Email"
                        />

                        {/* Street Address */}
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.address}
                            label="Address"
                            type="text"
                            field="address"
                            className="form-control address"
                            value={this.state.address}
                            placeholder="Street address"
                        />

                        {/* City */}
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.city}
                            type="text"
                            field="city"
                            className="form-control address"
                            value={this.state.city}
                            placeholder="City"
                        />

                        {/* State */}
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.state}
                            type="text"
                            field="state"
                            className="form-control address"
                            value={this.state.state}
                            placeholder="State"
                        />

                        {/* County */}
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.county}
                            type="text"
                            field="county"
                            className="form-control"
                            value={this.state.county}
                            placeholder="County"
                        />

                        {/* Zip */}
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.zip}
                            type="text"
                            field="zip"
                            className="form-control address"
                            value={this.state.zip}
                            placeholder="Zip"
                        />
                        <button className="btn btn-primary form-btn mx-auto submit-btn" disabled={this.state.isLoading}>Submit</button>
                    </form>         
            </div>
        )
    }
}

// ----------------------------------------------------------------------------------- //
// Setting Proptypes
SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}

// ----------------------------------------------------------------------------------- //
// Exporting the signUpform, withRouter for proper redirect after log-in
export default withRouter(SignupForm);