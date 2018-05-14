// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Component
import Nav from "../../components/Nav";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";
import MainHeader from "../../components/MainHeader";

// Actions
import { addFlashMessage } from "../../actions/flashMessages";

// CSS
import "../Landing/landing.css";

// ----------------------------------------------------------------------------------- //
// Creating the Parent Page
class CoachPortal extends Component {

    // Render the page
    render() {
        const { addFlashMessage } = this.props; 

        return (
            <div className="container-fluid">
            <Nav/>
                <div className="row">
                    <div className="col-md-6 form">
                    <FlashMessageList />
                    <MainHeader />
                        
                    </div>

                    <div className="col-md-6 form">
                        <div className="landing-bg">
                        {/*  */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

// ----------------------------------------------------------------------------------- //
// Setting propTypes
CoachPortal.propTypes = {
    addFlashMessage: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}


function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

// Exporting the page, and connecting the props with redux
export default connect(mapStateToProps, { addFlashMessage })(CoachPortal);