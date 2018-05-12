// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import "../../components/LogIn/login.css";
import validateInput from "../../Shared/Validations/signup";

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
                    {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className={"form-group"}>
                        <label htmlFor="first_name" className="control-label">First Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="first_name" 
                                placeholder="First Name"
                                onChange={this.handleInputChange}
                                value={this.state.first_name}
                            />
                            {/* Error Handling */}
                            {/* {errors.firstName && <span className="help-block">{errors.firstName}</span>} */}
                    </div>
                    {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className={"form-group"}>
                        <label htmlFor="lastName" className="control-label">Last Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="last_name" 
                                placeholder="Last Name"
                                onChange={this.handleInputChange}
                                value={this.state.last_name}
                            />
                            {/* Error Handling */}
                            {/* {errors.lastName && <span className="help-block">{errors.lastName}</span>} */}
                    </div>
                    {/* Will Validate this in the future */}
                    <div className="form-group">
                        <label htmlFor="password" className="control-label">Password</label>
                            <input
                                value={this.state.password}
                                name="password"
                                className="form-control"
                                onChange={this.handleInputChange}
                                type="password"
                                placeholder="Password Confirmation"
                            />
                    </div>
                    {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className={"form-group"}>
                        <label htmlFor="phoneNumber" className="control-label">Phone Number</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="phone" 
                                placeholder="Phone Number"
                                onChange={this.handleInputChange}
                                value={this.state.phone}
                            />
                            {/* Error Handling */}
                            {/* {errors.phone && <span className="help-block">{errors.phone}</span>} */}
                    </div>
                    {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className={"form-group"}>
                        <label htmlFor="email" className="control-label">E-mail</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="email" 
                                placeholder="E-mail"
                                onChange={this.handleInputChange}
                                value={this.state.email}
                            />
                            {/* Error Handling */}
                            {/* {errors.email && <span className="help-block">{errors.email}</span>} */}
                    </div>
                    {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className={"form-group"}>
                        <label htmlFor="sport" className="control-label">Sport</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="sport" 
                                placeholder="Sport"
                                onChange={this.handleInputChange}
                                value={this.state.sport}
                            />
                            {/* Error Handling */}
                            {/* {errors.sport && <span className="help-block">{errors.sport}</span>} */}
                    </div>
                    {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className={"form-group"}>
                        <label htmlFor="address"  className="control-label">Address</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="address" 
                                placeholder="Address"
                                onChange={this.handleInputChange}
                                value={this.state.address}
                            />
                            <input 
                                type="text" 
                                className="form-control" 
                                name="zip" 
                                placeholder="Zip code"
                                onChange={this.handleInputChange}
                                value={this.state.zip}
                            />
                            <input 
                                type="text" 
                                className="form-control" 
                                name="city" 
                                placeholder="City"
                                onChange={this.handleInputChange}
                                value={this.state.city}
                            />
                            <input 
                                type="text" 
                                className="form-control" 
                                name="state" 
                                placeholder="State"
                                onChange={this.handleInputChange}
                                value={this.state.state}
                            />
                            <input 
                                type="text" 
                                className="form-control" 
                                name="county" 
                                placeholder="County"
                                onChange={this.handleInputChange}
                                value={this.state.county}
                            />
                            {/* Error Handling */}
                            {/* {errors.address && <span className="help-block">{errors.address}</span>} */}
                    </div>
                    <button className="btn btn-primary form-btn mx-auto" disabled={this.state.isLoading}>Submit</button>
                </form>         
            </div>
        )
    }
}

// Setting Proptypes
CoachSignupForm.propTypes = {
    coachSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

// Exporting the signUpform, withRouter for proper redirect after log-in
export default withRouter(CoachSignupForm);