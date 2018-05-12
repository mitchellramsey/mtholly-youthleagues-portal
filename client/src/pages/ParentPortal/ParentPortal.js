import React, { Component } from "react";
import MainHeader from "../../components/MainHeader";
import DummyForm from "../../components/DummyForm";
import CreateChildForm from "../../components/CreateChildForm";
import "./ParentPortal.css";
import Nav from "../../components/Nav";
import flashMessages from "../../Shared/rootReducer/flashMessages";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";



class ParentPortal extends Component {
    constructor() {
        super();
        this.state = {
            showChildForm: true
        }

    }
    

    toggleChildForm () {
        console.log(this);
        this.setState({
            showChildForm: !this.state.showChildForm
        });
    }

    render() {
        return (
            <div className="container-fluid">
            <Nav/>
                <div className="row">
                    <div className="col-md-6 form">
                    <MainHeader />
                        <button className="btn btn-success register" onClick={this.toggleChildForm}>Register Child</button>
                        
                    </div>

                    <div className="col-md-6 form">
                        <div className="landing-bg">
                            {
                                this.state.showChildForm
                                    ? <CreateChildForm />
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};



// Exporting the page, and connecting the props with redux
// export default connect(null, { addFlashMessage })(ParentPortal);