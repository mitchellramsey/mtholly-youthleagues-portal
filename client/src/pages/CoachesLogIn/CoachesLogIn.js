// Imports
import React, { Component } from "react";

// Component
import CoachForm from "../../components/CoachForm/CoachForm";
import Nav from "../../components/Nav/Nav";
import MainHeader from "../../components/MainHeader/MainHeader";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";

// CSS
import "../../pages/Landing/landing.css";

// ----------------------------------------------------------------------------------- //
// Creating the Coach Page
class CoachesLogIn extends Component {
    // Render the page
    render() {
        return (
            <div className="container-fluid">
                <Nav/>
                <div className="row">
                    <div className="col-md-6 form homepage">
                        <MainHeader/>
                        <FlashMessageList/>
                        <CoachForm
                            onSubmit={() => this.handleFormSubmit()}
                            onChange={() => this.handleInputChange()}
                            user={() => this.state.user}
                        />
                    </div>

                    <div className="col-md-6 home-bg homepage">
                        <div className="landing-bg">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

// ----------------------------------------------------------------------------------- //
// Export the page
export default CoachesLogIn;