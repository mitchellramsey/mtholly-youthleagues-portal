// Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

// Creating the Log in form component
class CreateChildForm extends Component {
    constructor(props) {
        super(props);
        // Setting state
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            sport: "",
            years_exp: "",
            comments: ""
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
    

    // On form submit
    handleFormSubmit = event => {
        // Preventing default form behavior
        event.preventDefault();

        // If state is valid, perform the AJAX request
       
            this.props.childSignUp(this.state).then(
                // Then, redirect
                () => {
                    this.props.history.push("/") 
                },
                // Setting errors
                (err) => this.setState({ errors: err.response.data, isLoading: false })            
            );
        
    }

    // Render the form
    render() {


        return (
            <div className="col-md-6 text-center mx-auto">
                <h3>Register Child</h3>
                {/* Sign Up Form */}
                <form className="form" method="POST" onSubmit={this.handleFormSubmit}>
                    {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className={classnames("form-group")}>
                        <label htmlFor="firstName" className="control-label">First Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="firstName" 
                                placeholder="First Name"
                                onChange={this.handleInputChange}
                                value={this.state.firstName}
                            />

                    </div>
                    {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className={classnames("form-group")}>
                        <label htmlFor="lastName" className="control-label">Last Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="lastName" 
                                placeholder="Last Name"
                                onChange={this.handleInputChange}
                                value={this.state.lastName}
                            />

                    </div>
                    {/* Will Validate this in the future */}
                    <div className="form-group">
                        <label htmlFor="age" className="control-label">Age</label>
                            <input
                                value={this.state.age}
                                name="age"
                                className="form-control"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="0"
                            />
                    </div>
                    {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className={classnames("form-group")}>
                        <label htmlFor="gender" className="control-label">Gender</label>
                            <select 
                                className="form-control" 
                                name="gender" 
                                onChange={this.handleInputChange}
                                value={this.state.gender}
                            >
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            </select>

                    </div>
                    {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className={classnames("form-group")}>
                        <label htmlFor="sport" className="control-label">Sport</label>
                            <select
                                className="form-control" 
                                name="sport" 
                                onChange={this.handleInputChange}
                                value={this.state.sport}
                            >
                            <option value="">Sport</option>
                            {/* This needs to be loaded in from the Sports Table Database */}
                            </select>

                    </div>
                    {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className={classnames("form-group")}>
                        <label htmlFor="years_exp"  className="control-label">Years of Experience</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                name="years_exp" 
                                placeholder="0"
                                onChange={this.handleInputChange}
                                value={this.state.years_exp}
                            />
                    </div>
                    <div className={classnames("form-group")}>
                        <label htmlFor="years-exp"  className="control-label">Comments</label>
                            <textarea 
                                 
                                className="form-control" 
                                name="comments" 
                                
                                onChange={this.handleInputChange}
                                value={this.state.comments}
                            />
                    </div>

                            

                    
                    <button className="btn btn-primary form-btn mx-auto" disabled={this.state.isLoading}>Submit</button>
                </form>         
            </div>
        )
    }
}

CreateChildForm.propTypes = {
    parentSubmit: PropTypes.func.isRequired
}


//Setting PropTypes
CreateChildForm.propTypes = {
    childSignUp: PropTypes.func.isRequired,

}

// Exporting the page, and connecting the props with redux
export default withRouter(CreateChildForm);
