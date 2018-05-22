// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

// Component
import TextFieldGroup from "../TextFieldGroup/TextFieldGroup";


// Validation
import validateInput from "../../Shared/Validations/coachessignup";

// CSS
import "../../components/LogInForm/loginform.css";

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
                coach: true,
                
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
            this.props.isCoachExists(value).then(res => {
                // Defining errors
                let errors = this.state.errors;
                // If error
                if(res.data.user) {
                    // set error
                    errors[field] = "This email is already taken";
                } else {
                    // Leave the field empty
                    errors[field] = "";
                }
                // Set State with errors
                this.setState({ errors });
            });
        }
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
                <hr className="line"></hr>
                {/* Sign Up Form */}
                <form className="form" onSubmit={this.handleFormSubmit}>
                    {/* First Name */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.first_name}
                        label="First Name"
                        type="text"
                        field="first_name"
                        className="form-control"
                        value={this.state.first_name}
                        placeholder="First Name"
                    />
                    {/* Last Name */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.last_name}
                        label="Last Name"
                        type="text"
                        field="last_name"
                        className="form-control"
                        value={this.state.last_name}
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
                    {/* Email */}
                    <TextFieldGroup
                        onChange={this.handleInputChange}
                        checkUser={this.checkUser}
                        errors={errors.email}
                        label="Email"
                        type="text"
                        field="email"
                        className="form-control"
                        value={this.state.email}
                        placeholder="Email"
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
                    {/* Sport */}
                    <div className={classnames("form-group")}>
                        <label htmlFor="sport" className="control-label">Sport</label>
                            <select
                                className="form-control" 
                                name="sport" 
                                onChange={this.handleInputChange}
                                value={this.state.sport}
                                required="required"
                            >
                            <option value="" disabled="disabled">Sport</option>
                            {this.props.sports.map(sport => (
                                <option value={sport.id} key={sport.id}>{sport.name}</option>
                            ))}
                            </select>

                    </div>
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
                    <button className="btn btn-primary form-btn mx-auto submit-btn button-actions">Submit</button>
                </form>         
            </div>
        )
    }
}

// ---------------------------------------------------------------------------------------------------- //

// Setting Proptypes
CoachSignupForm.propTypes = {
    coachSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isCoachExists: PropTypes.func.isRequired
}

// ---------------------------------------------------------------------------------------------------- //
// Exporting the signUpform, withRouter for proper redirect after log-in
export default withRouter(CoachSignupForm);