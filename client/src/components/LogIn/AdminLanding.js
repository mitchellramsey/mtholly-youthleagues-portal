import React, { Component } from "react";
import "./login.css";

class AdminLanding extends Component {
    // Setting state
    state = {
        coachEmail: "",
        coachPassword: "",
        leagueAdminEmail: "",
        leagueAdminPassword: "",
        leagueAdminPin: ""
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
            coachEmail: "",
            coachPassword: "",
            leagueAdminEmail: "",
            leagueAdminPassword: ""
        });
    };

    render() {
        return(
            <div className="col-md-6 text-center mx-auto">
                <h3>Administrative Access Portal</h3>

                <h4>Coaches</h4>
                <form className="form" method="POST">
                    <input
                        value={this.state.coachEmail}
                        name="coachEmail"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        value={this.state.coachPassword}
                        name="coachPassword"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
                    <button className="btn btn-primary form-btn mx-auto" onClick={this.handeFormSubmit}>Submit</button>
                </form>

                <h4>League Administrators</h4>
                <form className="form" method="POST">
                    <input
                        value={this.state.leagueAdminEmail}
                        name="leagueAdminEmail"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        value={this.state.leagueAdminPassword}
                        name="leagueAdminPassword"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        value={this.state.leagueAdminPin}
                        name="leagueAdminPin"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Pin"
                    />
                    <button className="btn btn-primary form-btn mx-auto" onClick={this.handeFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AdminLanding;