// Imports
import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Loading from "react-loading-animation";

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
                team: "",
                coachId: props.coachId,
                teams: props.teams,
                isLoading: false,
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
            this.setState({ errors: {}, 
                            date: "",
                            time: "",
                            location: "", 
                            team: "",
                            isLoading: true
                        });

            this.props.createPracticePost(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: "Success",
                        text: "You have created a practice successfully"
                    });
                    this.setState({ isLoading: false })
                },
                // Setting errors
                (err) => this.setState({ errors: err.response.data }),
                this.props.retrievePractices(this.state.coachId)            
            );
        }
    };

    // Render the component
    render() {
        // Setting the errors object
        const { errors, isLoading } = this.state;

        // Loading Spinner
        if(isLoading) {
            return <Loading/>
        }

        return(
            <div className="col-md-6 mx-auto homepage">
            {/* Form */}
            { this.props.teams === null 
                ?
                <div className="coachDataDiv col-md-12 mx-auto homepage">
                    <div className="col-md-12 text-center">
                        <span className="data-header">You must be assigned to a team before you can create a practice</span>
                    </div>
                </div>
            // Else
            :
                <form className="form" onSubmit={this.handleFormSubmit}>
                    {/* Date */}
                    <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.date}
                            label="Date"
                            type="date"
                            field="date"
                            className="form-control"
                            value={this.state.date}
                            placeholder="MM/DD/YY"
                    />
                    {/* Time */}
                    <TextFieldGroup
                            onChange={this.handleInputChange}
                            errors={errors.time}
                            label="Time"
                            type="time"
                            field="time"
                            className="form-control"
                            value={this.state.time}
                            placeholder="hh:MM"
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
                    <div className={classnames("form-group text-center")}>
                        <h4><label htmlFor="team" className="control-label">Team</label></h4>
                            <select
                                className="form-control" 
                                name="team" 
                                onChange={this.handleInputChange}
                                value={this.state.team}
                                required="required"
                            >
                            <option value="" disabled="disabled">Team</option>
                                <option value={this.props.teams.id} key={this.props.teams.id}>{this.props.teams.teamName}</option>
                            </select>

                    </div>
                        <button className="btn btn-primary form-btn mx-auto submit-btn button-actions" disabled={this.state.isLoading}>Submit</button>
                </form>
            }
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





    
