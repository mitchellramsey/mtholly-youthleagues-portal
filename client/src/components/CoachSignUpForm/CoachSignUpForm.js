// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// Component
import TextFieldGroup from "../TextFieldGroup/TextFieldGroup";

// Validation
import validateInput from "../../Shared/Validations/coachessignup";

// CSS
import "../../components/LogIn/login.css";

// ---------------------------------------------------------------------------- //

// Creating the Signup form
class CoachSignupForm extends Component {

    constructor(props) {
        super(props);
            // Setting state
            this.state = {
                first_name: "",
                last_name: "",
                address: "", 
                city: "",
                state: "",
                password: "",
                passwordConfirmation: "",
                zip: "",
                sport: "",
                phone: "",
                email: "",
                errors: {},
                isLoading: false,
                coach: true
            };
        
        // Binding form submittion and input change to "this" specific one
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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

    // On form submit
    handleFormSubmit = event => {
        // When the form is submitted, reset any stored errors and disable the submit button during load time
        // To prevent multiple events
        this.setState({ errors: {}, isLoading: true });
        // Preventing default form behavior
        event.preventDefault();

        // If state is valid, perform the AJAX request
        if(this.isValid()) {
            this.props.coachSignupRequest(this.state).then(
                // Then, redirect
                () => {
                    this.props.addFlashMessage({
                        type: "Success",
                        text: "You have signed up successfully, Welcome. Please log in to continue"
                    })
                    this.props.history.push("/coacheslogin") 
                },
                // Setting errors
                (err) => this.setState({ errors: err.response.data, isLoading: false })            
            );
        }
    };

    // Render the form
    render() {
        // Setting the errors variable
        const { errors } = this.state;

        return(
            <div className="col-md-6 text-center mx-auto">
                <h3>Coach Sign-up Form</h3>
                {/* Sign Up Form */}
                <form className="form" onSubmit={this.handleFormSubmit}>
                    {/* First Name */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.first_name}
                        label="First Name"
                        type="text"
                        name="first_name"
                        className="form-control"
                        value={this.state.first_name}
                        placeholder="First Name"
                        id="first_name"
                    />
                    {/* Last Name */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.last_name}
                        label="Last Name"
                        type="text"
                        name="last_name"
                        className="form-control"
                        value={this.state.last_name}
                        placeholder="Last Name"
                        id="last_name"
                    />
                    {/* Password */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.password}
                        label="Password"
                        type="password"
                        name="password"
                        className="form-control"
                        value={this.state.password}
                        placeholder="Password"
                        id="password"
                    />
                    {/* Password Confirmation */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.passwordConfirmation}
                        label="Password Confirmation"
                        type="password"
                        name="passwordConfirmation"
                        className="form-control"
                        value={this.state.passwordConfirmation}
                        placeholder="Password Confirmation"
                        />
                    {/* Email */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.email}
                        label="Email"
                        type="text"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        placeholder="Email"
                        id="Email"
                    />
                    {/* Phone */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.phone}
                        label="Phone"
                        type="text"
                        name="phone"
                        className="form-control"
                        value={this.state.phone}
                        placeholder="Phone"
                        id="phone"
                    />
                    {/* Sport */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.sport}
                        label="Sport"
                        type="text"
                        name="sport"
                        className="form-control"
                        value={this.state.sport}
                        placeholder="Sport"
                        id="sport"
                    />
                    {/* Street Address */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.address}
                        label="Address"
                        type="text"
                        name="address"
                        className="form-control address"
                        value={this.state.address}
                        placeholder="Street address"
                        id="address"
                    />

                    {/* City */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.city}
                        type="text"
                        name="city"
                        className="form-control address"
                        value={this.state.city}
                        placeholder="City"
                        id="city"
                    />

                    {/* State */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.state}
                        type="text"
                        name="state"
                        className="form-control address"
                        value={this.state.state}
                        placeholder="State"
                        id="state"
                    />
                    {/* Zip */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.zip}
                        type="text"
                        name="zip"
                        className="form-control address"
                        value={this.state.zip}
                        placeholder="Zip"
                        id="zip"
                    />
                    <button className="btn btn-primary form-btn mx-auto submit-btn" disabled={this.state.isLoading}>Submit</button>
                </form>         
            </div>
        )
    }
}

// ---------------------------------------------------------------------------------------------------- //

// Setting Proptypes
CoachSignupForm.propTypes = {
    coachSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

// ---------------------------------------------------------------------------------------------------- //
// Exporting the signUpform, withRouter for proper redirect after log-in
export default withRouter(CoachSignupForm);