// Imports
import React, { Component } from "react";
import MainHeader from "../../components/MainHeader";
import SignupForm from "../../components/SignUpForm";
import { connect } from "react-redux";
import { userSignupRequest } from "../../actions/signupActions";
import { addFlashMessage } from "../../actions/flashMessages";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";
import Nav from "../../components/Nav";
import PropTypes from "prop-types";
import "../Landing/landing.css";

// Signup Page
class SignupPage extends Component {

    // Render the page
    render() {

        // Decontruction the variable
        const {userSignupRequest, addFlashMessage} = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 form">
                        <Nav/>
                        <MainHeader/>
                        <SignupForm
                            userSignupRequest={userSignupRequest}
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

// Setting propTypes
SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

// Exporting the page, and connecting the props with redux
export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage);