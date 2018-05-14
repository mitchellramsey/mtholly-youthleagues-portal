// Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";

// Actions
import { coachesLogInRequest } from "../../actions/coachesLogInRequest";

// Validation
import validateInput from "../../Shared/Validations/login";

// CSS
import "../LogInForm/loginform.css";


// ----------------------------------------------------------------------------------- //

// Creating the Log in form component
class CoachForm extends Component {
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
            this.props.coachesLogInRequest(this.state).then(
                (res) => this.context.router.history.push("/"),
                (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
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
            <div className="continue">
                <button className="btn btn-primary form-btn mx-auto" disabled={isLoading} onClick={this.handleFormSubmit}>
                    <Link to="/parent-portal" className="links">Continue to Coach Portal</Link>
                </button>
            </div>
        )
        // Log in form
        const loginFormArea = (
            <form className="form">
                {/* "ClassNames NPM Package for conditional error handling styles" */}
                <div className={classnames("form-group", { "has-error": errors.email })}>
                        <label htmlFor="email" className="control-label">Email</label>
                            <input
                                value={this.state.email}
                                name="email"
                                onChange={this.handleInputChange}
                                type="email"
                                placeholder="Email"
                                id="email"
                            />
                            {/* Error Handling */} 
                            {errors.email && <span className="help-block">{errors.email}</span>} 
                    </div>
                    {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className={classnames("form-group", { "has-error": errors.password })}>
                        <label htmlFor="password" className="control-label">Password</label>
                            <input
                                value={this.state.password}
                                name="password"
                                onChange={this.handleInputChange}
                                type="password"
                                placeholder="Password"
                            />
                            {/* Error Handling */} 
                            {errors.password && <span className="help-block">{errors.password}</span>}
                    </div>
                    <button className="btn btn-primary form-btn mx-auto" disabled={isLoading} onClick={this.handleFormSubmit}>Submit</button>

                    <h5>Need an account?</h5>
                    <span>Click <Link to="/coachessignup">here</Link></span>
                </form>
        )

        // Render the form or button
        return (
            // Main page
            <div className="col-md-6 text-center mx-auto">
                <h3>Coach Access Portal</h3>
                {/* If authenticated, either render the log-in form or the continue button */}
                <div>
                    { isAuthenticated ? continueButton : loginFormArea }
                </div>

            </div>
        )
    }
}

// ---------------------------------------------------------------------------------------------------- //

// Setting propTypes
CoachForm.propTypes = {
    auth: PropTypes.object.isRequired,
    coachesLogInRequest: PropTypes.func.isRequired
}

CoachForm.contextTypes = {
    router: PropTypes.object.isRequired
}

// Needing to access redux store
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

// ---------------------------------------------------------------------------------------------------- //
// Exporting the form component and connecting it with redux
export default connect(mapStateToProps, { coachesLogInRequest })(CoachForm);