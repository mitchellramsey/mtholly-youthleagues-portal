import React, { Component } from "react";
import MainHeader from "../../components/MainHeader";
import Nav from "../../components/Nav";



class ParentPortal extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 form">
                        <Nav/>
                        <MainHeader/>
                        
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

export default ParentPortal;