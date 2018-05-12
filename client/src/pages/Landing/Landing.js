// Imports
import React, { Component } from "react";
import MainHeader from "../../components/MainHeader";
import LogIn from "../../components/LogIn";
import Nav from "../../components/Nav/Nav";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";
import "./landing.css";

// Creating the Homepage
class Landing extends Component {
    // Render the page
    render() {
        return (
            <div className="container-fluid">
                <Nav/>
                <div className="row">
                    <div className="col-md-6 form">
                        <MainHeader/>
                        <FlashMessageList/>
                        <LogIn
                            onSubmit={() => this.handleFormSubmit()}
                            onChange={() => this.handleInputChange()}
                            user={() => this.state.user}
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

// Export the page
export default Landing;