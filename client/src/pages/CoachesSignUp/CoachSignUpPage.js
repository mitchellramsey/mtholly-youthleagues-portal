// Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Component
import MainHeader from "../../components/MainHeader";
import CoachSignUpForm from "../../components/CoachSignUpForm/CoachSignUpForm";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";
import Nav from "../../components/Nav";

// Actions
import { coachSignupRequest } from "../../actions/coachSignUpRequest";
import { addFlashMessage } from "../../actions/flashMessages";

// CSS
import "../Landing/landing.css";

// ----------------------------------------------------------------------------------- //
// Coach Signup Page
class CoachSignUpPage extends Component {

    // Render the page
    render() {

        // Decontruction the variable
        const {coachSignupRequest, addFlashMessage} = this.props;

        return (
            <div className="container-fluid">
                <Nav/>
                <div className="row">
                    <div className="col-md-6 form">
                        <MainHeader/>
                        <FlashMessageList/>
                        <CoachSignUpForm
                            coachSignupRequest={coachSignupRequest}
                            addFlashMessage={addFlashMessage}
                        />
                    </div>

                    <div className="col-md-6 home-bg">
                        <div className="landing-bg">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

// ----------------------------------------------------------------------------------- //
// Setting propTypes
CoachSignUpPage.propTypes = {
    coachSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

// ----------------------------------------------------------------------------------- //
// Exporting the page, and connecting the props with redux
export default connect(null, { coachSignupRequest, addFlashMessage })(CoachSignUpPage);