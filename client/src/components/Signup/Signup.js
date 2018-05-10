import React, { Component } from "react";
import "../../components/LogIn/login.css";

class Signup extends Component {
    // Setting state
    state = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        zip: "",
        city: "",
        state: "",
        county: ""
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
                <h3>Sign-up Form</h3>

                <form className="form" method="POST">
                    <div className="form-group">
                        <label htmlFor="accountType"> Account Type: </label><br/>
                            <select name="accountType">
                                <option value="">Account Type</option>
                                <option value="parent">Parent</option>
                                <option value="coach">Coach</option>
                            </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="firstName" 
                                placeholder="First Name"
                                value={this.state.firstName}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="lastName" 
                                placeholder="Last Name"
                                value={this.state.lastName}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="phone" 
                                placeholder="Phone Number"
                                value={this.state.phone}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="E-mail"
                                value={this.state.email}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="address" 
                                placeholder="Address"
                                value={this.state.address}
                            />
                            <input 
                                type="text" 
                                className="form-control" 
                                id="zip" 
                                placeholder="Zip code"
                                value={this.state.zip}
                            />
                            <input 
                                type="text" 
                                className="form-control" 
                                id="city" 
                                placeholder="City"
                                value={this.state.city}
                            />
                            <input 
                                type="text" 
                                className="form-control" 
                                id="state" 
                                placeholder="State"
                                value={this.state.state}
                            />
                            <input 
                                type="text" 
                                className="form-control" 
                                id="county" 
                                placeholder="County"
                                value={this.state.county}
                            />
                    </div>
                    <button className="btn btn-primary form-btn mx-auto" onClick={this.handeFormSubmit}>Submit</button>
                </form>         
            </div>
        )
    }
}

export default Signup;