// Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { userSignupRequest, isUserExists } from "../../actions/signupActions";
import { addFlashMessage } from "../../actions/flashMessages";

// Component
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";
import Nav from "../../components/Nav";
import MainHeader from "../../components/MainHeader";
import SignupForm from "../../components/SignUpForm";
import Footer from "../../components/Footer/Footer";


// CSS
import "../Landing/landing.css";


// ----------------------------------------------------------------------------------- //
// Signup Page
class SignupPage extends Component {

    // Render the page
    render() {

        // Decontruction the variable
        const {userSignupRequest, addFlashMessage, isUserExists} = this.props;

        return (
            <div className="container-fluid">
                <Nav/>
                <div className="row">
                    <div className="col-md-6 form">
                        <MainHeader/>
                        <FlashMessageList/>
                        <SignupForm
                            userSignupRequest={userSignupRequest}
                            addFlashMessage={addFlashMessage}
                            isUserExists={isUserExists}
                        />
                    </div>

                    <div className="col-md-6 home-bg">
                        <div className="landing-bg">
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
};

// ----------------------------------------------------------------------------------- //
// Setting propTypes
SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}

// ----------------------------------------------------------------------------------- //
// Exporting the page, and connecting the props with redux
export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignupPage);