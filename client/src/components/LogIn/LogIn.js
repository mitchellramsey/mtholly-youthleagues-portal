import React, { Component } from "react";
import "./login.css";

class LogIn extends Component {
    // Setting state
    state = {
        email: "",
        password: ""
    };

    handleInputChange = event => {
        // Getting value/name of the input
        let value = event.target.value;
        const name = event.target.name;
    
        if (name === "password") {
          value = value.substring(0, 18);
        }

        // Updating the state of input
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        // Preventing default form behavior
        event.preventDefault();

        // Re-setting state
        this.setState({
            email: "",
            password: ""
        });
    };

    render() {
        return(
            <div className="col-md-6 text-center mx-auto">
                <h3>Parent Access Portal</h3>
                <form className="form">
                    <input
                        value={this.state.email}
                        name="Email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="First Name"
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
        )
    }
}

export default LogIn;