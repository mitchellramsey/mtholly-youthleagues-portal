import React, { Component } from "react";
import MainHeader from "../../components/MainHeader";
import CreateChildForm from "../../components/CreateChildForm";
import "./ParentPortal.css";
import Nav from "../../components/Nav";
import { childSignUp } from "../../actions/registerChild";
import PropTypes from "prop-types";
import { connect } from "react-redux";



class ParentPortal extends Component {
    constructor() {
        super();
        this.state = {
            showChildForm: false
        }

    }


    

    toggleChildForm () {
        console.log(this);
        this.setState({
            showChildForm: !this.state.showChildForm
        });
    }

    render() {

        const { childSignUp } = this.props; 

        return (
            <div className="container-fluid">
            <Nav/>
                <div className="row">
                    <div className="col-md-6 form">
                    <MainHeader />
                        <button className="btn btn-success register" onClick={() => this.toggleChildForm()}>Register Child</button>
                        
                    </div>

                    <div className="col-md-6 form">
                        <div className="landing-bg">
                            {
                                this.state.showChildForm
                                    ? <CreateChildForm 
                                        childSignUp={childSignUp}
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

// Setting propTypes
ParentPortal.propTypes = {
    childSignUp: PropTypes.func.isRequired,
  
}

// Exporting the page, and connecting the props with redux
export default connect(null, { childSignUp })(ParentPortal);
