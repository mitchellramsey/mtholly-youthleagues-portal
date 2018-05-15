// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Component
import Nav from "../../components/Nav";
import Footer from "../../components/Footer/Footer";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";
import MainHeader from "../../components/MainHeader";
import CreatePracticeForm from "../../components/createPracticeForm";

// Actions
import { addFlashMessage } from "../../actions/flashMessages";
import { createPracticePost } from "../../actions/practicePost";

// CSS
import "../Landing/landing.css";

// ----------------------------------------------------------------------------------- //
// Creating the Parent Page
class CoachPortal extends Component {

    constructor() {
        super();
        this.state = {
            createPracticeForm: false,
            showTeam: false,
            showSchedule: false
        }

    }

    // Toggle create practice form
    togglePracticeForm () {
        this.setState({
            createPracticeForm: !this.state.createPracticeForm
        });
    }
    

    // Render the page
    render() {
        const { addFlashMessage, createPracticePost } = this.props; 

        return (
            <div className="container-fluid">
            <Nav/>
                <div className="row">
                    <div className="col-md-6 form">
                    <MainHeader />
                    <FlashMessageList />
                    {/* Buttons to render certain data */}
                    <div className="button-div text-center">
                        <ul className="mx-auto">
                            <li><button className="btn btn-primary form-btn coach-links" onClick={() => this.togglePracticeForm()}>Create Practice</button></li>
                            <li><button className="btn btn-primary form-btn coach-links">Show Team</button></li>
                            <li><button className="btn btn-primary form-btn coach-links">Show Schedule</button></li>
                        </ul>
                    </div> 
                    {/* Toggle Forms */}
                    { this.state.createPracticeForm ?  
                    // Create Practice Form
                    <CreatePracticeForm createPracticePost={createPracticePost}
                                        addFlashMessage={addFlashMessage}
                                        coachId={this.props.auth.user.id}
                    />
                    // If not toggled to true, hide the form
                    : null }
                    </div>

                    <div className="col-md-6 form">
                        <div className="landing-bg">
                        {/*  */}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
};

// ----------------------------------------------------------------------------------- //
// Setting propTypes
CoachPortal.propTypes = {
    addFlashMessage: PropTypes.func.isRequired,
    createPracticePost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}


function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

// Exporting the page, and connecting the props with redux
export default connect(mapStateToProps, { addFlashMessage, createPracticePost })(CoachPortal);