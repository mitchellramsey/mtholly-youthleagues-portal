// Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { adminLogInRequest } from "../../actions/adminLogInRequest";

// Component
import TextFieldGroup from "../TextFieldGroup/TextFieldGroup";

// Validation 
import validateInput from "../../Shared/Validations/login";

// CSS
import "../LogInForm/loginform.css";

// --------------------------------------------------------- //


// Creating the Log in form component
class AdminLogIn extends Component {
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
            this.props.adminLogInRequest(this.state).then(
                (res) => this.context.router.history.push("/"),
                (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
            )
        }
    };

    // Render the form
    render() {
        // Setting the errors variable
        const { isLoading } = this.state;
        // Acessing authenticated property
        const { isAuthenticated } = this.props.auth;

        // Continue button
        const continueButton = (
            <div className="continue">
                <button className="btn btn-primary form-btn mx-auto" disabled={isLoading} onClick={this.handleFormSubmit}>
                    <Link to="/admin-portal" className="links">Continue to Admin Portal</Link>
                </button>
            </div>
        )
        // Log in form
        const loginFormArea = (
            <form className="form">
                {/* Email */}
                <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={this.email}
                        label="Email"
                        type="text"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        placeholder="Email"
                        id="email"
                    />
                {/* Password */}
                <TextFieldGroup
                        onChange={this.handleInputChange}
                        errors={this.email}
                        label="Password"
                        type="password"
                        name="password"
                        className="form-control"
                        value={this.state.password}
                        placeholder="Password"
                        id="password"
                    />
                    <button className="btn btn-primary form-btn mx-auto" disabled={isLoading} onClick={this.handleFormSubmit}>Submit</button>
                </form>
        )

        // Render the form or button
        return (
            // Main page
            <div className="col-md-6 text-center mx-auto">
                <h3>League Administrator Access Portal</h3>
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
AdminLogIn.propTypes = {
    auth: PropTypes.object.isRequired,
    adminLogInRequest: PropTypes.func.isRequired
}

AdminLogIn.contextTypes = {
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
export default connect(mapStateToProps, { adminLogInRequest })(AdminLogIn)