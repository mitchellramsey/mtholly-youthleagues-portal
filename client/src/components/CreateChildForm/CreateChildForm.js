// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";


// Component
import TextFieldGroup from "../TextFieldGroup/TextFieldGroup";

// CSS
import "./createchildform.css";

// ----------------------------------------------------------------------------------- //
// Creating Register Child Form

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
            comments: "",
            parentId: props.userId
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
                    <form className="form text-center child-form" onSubmit={this.handleFormSubmit}>
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={this.firstName}
                            label="First Name"
                            type="text"
                            field="firstName"
                            className="form-control"
                            value={this.state.firstName}
                            placeholder="First Name"
                        />
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={this.lastName}
                            label="Last Name"
                            type="text"
                            field="lastName"
                            className="form-control"
                            value={this.state.ame}
                            placeholder="Last Name"
                        />
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={this.age}
                            label="Age"
                            type="text"
                            field="age"
                            className="form-control"
                            value={this.state.age}
                            placeholder="Age"
                        />
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
                                {this.props.sports.map(sport => (
                                    <option value={sport.id}>{sport.name}</option>
                                ))}
                                </select>

                        </div>
                        <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={this.years_exp}
                            label="Years of Experience"
                            type="text"
                            field="years_exp"
                            className="form-control"
                            value={this.state.years_exp}
                            placeholder="Years of Experience"
                        />
                        <div className={classnames("form-group")}>
                            <label htmlFor="years-exp"  className="control-label">Comments</label>
                                <textarea 
                                    
                                    className="form-control" 
                                    name="comments" 
                                    
                                    onChange={this.handleInputChange}
                                    value={this.state.comments}
                                />
                        </div>
                    <button className="btn btn-primary form-btn mx-auto button-actions" disabled={this.state.isLoading}>Submit</button>
                </form>         
            </div>
        )
    }
}

// -------------------------------------------------------------------------------------------------
//Setting PropTypes
CreateChildForm.propTypes = {
    childSignUp: PropTypes.func.isRequired,

}

// -------------------------------------------------------------------------------------------------
// Exporting the page, and connecting the props with redux
export default withRouter(CreateChildForm);
