// Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { parentSubmit } from "../../actions/parentSubmit";
import PropTypes from "prop-types";

// Creating the Log in form component
class DummyForm extends Component {
    constructor(props) {
        super(props);
        // Setting state
        this.state = {
            testOne: "",
            testTwo: "",
            errors: {},
            isLoading: false
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
        this.props.parentSubmit(this.state);
    };

    // Render the form
    render() {
        // Setting the errors variable
        const { isLoading } = this.state;

        return (
            <div className="col-md-6 text-center mx-auto">
                <h3>Test</h3>
                
                <form className="form">
                {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className="form-group">
                        <label htmlFor="test" className="control-label">Test</label>
                            <input
                                value={this.state.fieldOne}
                                name="fieldOne"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="fieldOne"
                            />
                            {/* Error Handling */}
                            
                    </div>
                    {/* "ClassNames NPM Package for conditional error handling styles" */}
                    <div className="form-group">
                        <label htmlFor="password" className="control-label">TestTwo</label>
                            <input
                                value={this.state.testTwo}
                                name="testTwo"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="testTwo"
                            />
                    </div>
                    <button className="btn btn-primary form-btn mx-auto" disabled={isLoading} onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

DummyForm.propTypes = {
    parentSubmit: PropTypes.func.isRequired
}

export default connect(null, { parentSubmit })(DummyForm);