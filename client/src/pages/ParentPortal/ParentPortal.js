import React, { Component } from "react";
import MainHeader from "../../components/MainHeader";
import DummyForm from "../../components/DummyForm";
import { addFlashMessage } from "../../actions/flashMessages";
import { connect } from "react-redux";
import Nav from "../../components/Nav";
import flashMessages from "../../Shared/rootReducer/flashMessages";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";



class ParentPortal extends Component {

    render() {
        return (
            <div className="container-fluid">
            <Nav/>
                <div className="row">
                    <div className="col-md-6 form">
                        <MainHeader/>
                        <FlashMessageList/>
                        <DummyForm/>
                    </div>

                    <div className="col-md-6 form">
                        <div className="landing-bg">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

// Exporting the page, and connecting the props with redux
export default connect(null, { addFlashMessage })(ParentPortal);