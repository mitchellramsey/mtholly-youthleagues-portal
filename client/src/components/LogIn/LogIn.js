import React, { Component } from "react";
import LogInForm from "../LogInForm/LogInForm";
import "./login.css";

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
<<<<<<< HEAD
        return (
            <LogInForm
                onChange={this.handleInputChange}
                onSubmit={this.handleFormSubmit}
            />
=======
        return(
            <div className="col-md-6 text-center mx-auto">
                <h3>Parent Access Portal</h3>
                <form className="form">
                    <input
                        value={this.state.email}
                        name="Email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
                </form>
                <button className="btn btn-primary form-btn mx-auto" onClick={this.handeFormSubmit}>Submit</button>

                <h5>Need an account?</h5>
                <span>Click <a href="/signup">here</a></span>

                <h4>Administrative Access Portal</h4>
                <span>Log In <a href="/admin">here</a></span>
            </div>
>>>>>>> c441bbb838dd939face0ed399f21da34bc62f122
        )
    }
}

// Exporting the LogIn component
export default LogIn;