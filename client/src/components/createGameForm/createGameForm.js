// Imports
import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";

// Component
import TextFieldGroup from "../TextFieldGroup/TextFieldGroup";

// Validation
import validateInput from "../../Shared/Validations/createGame";

// CSS
import "../../components/LogInForm/loginform.css";

// ---------------------------------------------------------------------

class CreateGameForm extends Component {

	constructor(props) {
			super(props);
					// setting state
					this.state = {
							date: "",
							time: "", 
							location: "",
							team1: "",
							team2: "",
							teamId: props.teamId,
							error: {}
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
												team1: "",
												team2:""
										});

				this.props.createGamePost(this.state).then(
						// Then, redirect
						() => {
								this.props.addFlashMessage({
										type: "Success",
										text: "You have created a practice successfully"
								});
			 
						},
						// Setting errors
						(err) => this.setState({ errors: err.response.data }),
						this.props.retrieveGames(this.state.teamId)            
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
									{/* Team#1 */}
									<TextFieldGroup
													onChange={this.handleInputChange}
													errors={errors.team1}
													label="Team1"
													type="text"
													field="team1"
													className="form-control"
													value={this.state.team1}
													placeholder="Team#1"
									/>
									{/* Team#2 */}
									<TextFieldGroup
													onChange={this.handleInputChange}
													errors={errors.team2}
													label="Team2"
													type="text"
													field="team2"
													className="form-control"
													value={this.state.team2}
													placeholder="Team#2"
									/>
									<button className="btn btn-primary form-btn mx-auto submit-btn button-actions" disabled={this.state.isLoading}>Submit</button>
							</form>
					</div>
			)
	}
}
// Setting Proptypes
CreatePracticeForm.propTypes = {
	createGamePost: PropTypes.func.isRequired,
	addFlashMessage: PropTypes.func.isRequired
}

// ---------------------------------------------------------------------------------------------------- //
// Exporting the signUpform, withRouter for proper redirect after log-in
export default CreateGameForm;