// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Component
import Nav from "../../components/Nav";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";
import MainHeader from "../../components/MainHeader";
import CreateChildForm from "../../components/CreateChildForm";

// Actions
import { childSignUp } from "../../actions/registerChild";
import { addFlashMessage } from "../../actions/flashMessages";

// CSS
import "./ParentPortal.css";

// ----------------------------------------------------------------------------------- //
// Creating the Parent Page
class ParentPortal extends Component {
    constructor() {
        super();
        this.state = {
            showChildForm: false
        }

    }
    

    // Toggle child form on click
    toggleChildForm () {
       
        this.setState({
            showChildForm: !this.state.showChildForm
        });
    }

    // Render the page
    render() {

        const { childSignUp, addFlashMessage } = this.props; 

        return (
            <div className="container-fluid">
            <Nav/>
                <div className="row">
                    <div className="col-md-6 form">
                    <FlashMessageList />
                    <MainHeader />
                        <button className="btn btn-success register" onClick={() => this.toggleChildForm()}>Register Child</button>
                        
                    </div>

                    <div className="col-md-6 form">
                        <div className="landing-bg">
                            {
                                this.state.showChildForm
                                    ? <CreateChildForm 
                                        childSignUp={childSignUp}
                                        addFlashMessage={addFlashMessage}
                                    />
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
// Setting propTypes
ParentPortal.propTypes = {
    childSignUp: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

// Exporting the page, and connecting the props with redux
export default connect(null, { childSignUp, addFlashMessage })(ParentPortal);
