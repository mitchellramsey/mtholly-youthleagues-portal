// Imports
import React, { Component } from "react";

// Component
import LogInForm from "../LogInForm/LogInForm";

// CSS
import "./login.css";

// ----------------------------------------------------------------------------------- //

// Log in form and page
class LogIn extends Component {

    constructor(props) {
        super(props);
            // Setting state
            this.state = {
                user: {
                    email: "",
                    password: ""
                }
            };

        // Binding these methods
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // Getting value/name of the input
    handleInputChange = event => {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    };

    // On form submit
    handleFormSubmit = event => {
        // Preventing default form behavior
        event.preventDefault();
    };

    // Render the form
    render() {
        return (
            <LogInForm
                onChange={this.handleInputChange}
                onSubmit={this.handleFormSubmit}
            />
        )
    }
}

// ----------------------------------------------------------------------------------- //
// Exporting the LogIn component
export default LogIn;