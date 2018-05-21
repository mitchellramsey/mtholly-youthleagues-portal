// Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { loginRequest } from "../../actions/login";

// Component
import TextFieldGroup from "../TextFieldGroup/TextFieldGroup";

// Validation 
import validateInput from "../../Shared/Validations/login";

// CSS
import "./loginform.css";

// ----------------------------------------------------- //


// Creating the Log in form component
class LogInForm extends Component {
    constructor(props) {
        super(props);
        // Setting state
        this.state = {
            email: "",
            password: "",
            errors: {},
            isLoading: false
        };
        // Binding methods to 'this'
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // Capturing form input
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    
    // Validation check
    isValid() {
        const { errors, isValid } = validateInput(this.state);
        // If state is not valid, show errors
        if(!isValid) {
            this.setState({ errors })
        }
        return isValid;
    }

    // On form submit
    handleFormSubmit = event => {
        // Preventing default form behavior
        event.preventDefault();

        if(this.isValid()) {
            // When the form is submitted, reset any stored errors and disable the submit button during load time
            // To prevent multiple events
            this.setState({ errors: {}, isLoading: true });
            this.props.loginRequest(this.state).then(
                (res) => this.context.router.history.push("/parent-portal"),
                (err) => this.setState({ errors: err.response.data.errors, isLoading: false }),
                
            )
        } 
    };

    // Render the form
    render() {
        // Setting the errors variable
        const { isLoading, errors } = this.state;
        // Acessing authenticated property
        const { isAuthenticated } = this.props.auth;

        // Continue button
        const continueButton = (
            <div className="continue text-center">
                <button className="btn btn-primary form-btn mx-auto" disabled={isLoading} onClick={this.handleFormSubmit}>
                    <Link to="/parent-portal" className="links">Continue to Parent Portal</Link>
                </button>

            </div>
        )
        // Log in form
        const loginFormArea = (
            <form className="form text-center">
                {/* Email */}
                <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={errors.email}
                        label="Email"
                        type="text"
                        field="email"
                        className="form-control"
                        value={this.state.email}
                        placeholder="Email"
                        id="email"
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
                        id="password"
                    />
                    <button className="btn btn-primary form-btn mx-auto button-actions" disabled={isLoading} onClick={this.handleFormSubmit}>Submit</button>

                    <h5 className="LoginHeadings">Need an account?</h5>
                    <span>Click <Link to="/signup">here</Link></span>
                    
                    <h4 className="LoginHeadings">Coaches Access Portal</h4>
                    <span>Log In <Link to="/coacheslogin">here</Link></span>

                    <h4 className="LoginHeadings">Administrative Access Portal</h4>
                    <span>Log In <Link to="/adminlogin">here</Link></span>
                    
                </form>
        )

        // Render the form or button
        return (
            // Main page
            <div className="col-md-6 text-center mx-auto">
                <h3>Parent Access Portal</h3>
                {/* Display possible log in error messages */}
                { errors.form && <div className="alert alert-danger">{errors.form}</div>}
                {/* If authenticated, either render the log-in form or the continue button */}
                <div>
                    { isAuthenticated ? continueButton : loginFormArea }
                </div>
            </div>
        )
    }
}

// ----------------------------------------------------------------------------------- //
// Setting propTypes
LogInForm.propTypes = {
    auth: PropTypes.object.isRequired,
    loginRequest: PropTypes.func.isRequired
}

LogInForm.contextTypes = {
    router: PropTypes.object.isRequired
}

// Needing to access redux store
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

// ----------------------------------------------------------------------------------- //
// Exporting the form component and connecting it with redux
export default connect(mapStateToProps, { loginRequest })(LogInForm);


