// Imports
import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";

// Component
import TextFieldGroup from "../TextFieldGroup/TextFieldGroup";

// Validation
import validateInput from "../../Shared/Validations/createPractice";

// CSS
import "../../components/LogInForm/loginform.css";

// ---------------------------------------------------------------------

// Creating the Render Roster component
class CreatePracticeForm extends Component {

    constructor(props) {
        super(props);
            // Setting state
            this.state = {
                date: "",
                time: "",
                location: "", 
                team_association: "",
                errors: {}
            };
        
        // Binding form submittion and input change to "this" specific one
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    // Capturing form input
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    // If state is true, run this function
    isValid() {
       const {errors, isValid } = validateInput(this.state);
    // If state is false, set errors
       if(!isValid) {
           this.setState({ errors })
       }
       // Getting the boolean value back    
       return isValid;
    }

    // On form submit
    handleFormSubmit = event => {
        // Preventing default form behavior
        event.preventDefault();
        // When the form is submitted, reset any stored errors and disable the submit button during load time
        // To prevent multiple events
        // If state is valid, perform the AJAX request
        if(this.isValid()) {
            this.setState({ errors: {}, isLoading: true });

            this.props.createPracticePost(this.state).then(
                // Then, redirect
                () => {
                    this.props.addFlashMessage({
                        type: "Success",
                        text: "You have created a practice successfully"
                    });
           
                },
                // Setting errors
                (err) => this.setState({ errors: err.response.data, isLoading: false })            
            );
        }
    };

    // Render the component
    render() {

        // Setting the errors object
        const { errors } = this.state;

        return(
            <div className="col-md-6 mx-auto">
            {/* Form */}
                <form className="form" onSubmit={this.handleFormSubmit}>
                    {/* Date */}
                    <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.date}
                            label="Date"
                            type="text"
                            field="date"
                            className="form-control"
                            value={this.state.date}
                            placeholder="Date"
                    />
                    {/* Time */}
                    <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.time}
                            label="Time"
                            type="text"
                            field="time"
                            className="form-control"
                            value={this.state.time}
                            placeholder="time"
                    />
                    {/* Location */}
                    <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.location}
                            label="Location"
                            type="text"
                            field="location"
                            className="form-control"
                            value={this.state.location}
                            placeholder="Location"
                    />
                    {/* Team associaton */}
                    <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.team_association}
                            label="Team Association"
                            type="text"
                            field="team_association"
                            className="form-control"
                            value={this.state.team_association}
                            placeholder="Team Association"
                    />
                    <button className="btn btn-primary form-btn mx-auto submit-btn" disabled={this.state.isLoading}>Submit</button>
                </form>
            </div>
        )
    }
}

// Setting Proptypes
CreatePracticeForm.propTypes = {
    createPracticePost: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

// ---------------------------------------------------------------------------------------------------- //
// Exporting the signUpform, withRouter for proper redirect after log-in
export default CreatePracticeForm;





    