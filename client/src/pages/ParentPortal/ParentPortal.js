import React, { Component } from "react";

// Component
import Nav from "../../components/Nav";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";
import MainHeader from "../../components/MainHeader";
import DummyForm from "../../components/DummyForm";
import CreateChildForm from "../../components/CreateChildForm";

// Redux root reducer
import flashMessages from "../../Shared/rootReducer/flashMessages";

// CSS
import "./ParentPortal.css";

// ----------------------------------------------------------------------------------- //
// Creating the Parent Page
class ParentPortal extends Component {
    constructor() {
        super();
        this.state = {
            showChildForm: true
        }

    }
    

    // Toggle child form on click
    toggleChildForm () {
        console.log(this);
        this.setState({
            showChildForm: !this.state.showChildForm
        });
    }

    // Render the page
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


// ----------------------------------------------------------------------------------- //
// Exporting the page, and connecting the props with redux
// export default connect(null, { addFlashMessage })(ParentPortal);