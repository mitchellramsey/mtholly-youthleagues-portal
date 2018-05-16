// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Component
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/MainHeader/MainHeader";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";

// Actions
import { addFlashMessage } from "../../actions/flashMessages";

// CSS
import "../../pages/Landing/landing.css";

// ----------------------------------------------------------------------------------- //
// Creating the Admin Page

class AdminPortal extends Component {

    constructor() {
      super();
      
      this.state = {
        showMenu: false,
      }
    }

  // Render the page
  render() {
    const { addFlashMessage } = this.props;

    return (
      <div className="container-fluid">
        <Nav />
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

        <div>

        <button>
          Show menu
        </button>
        
        <div className="menu">
          <button> Sports </button>
          <button> Form Teams </button>
        
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
};

// ----------------------------------------------------------------------------------- //
// Setting propTypes
AdminPortal.propTypes = {
  addFlashMessage: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

// Exporting the page, and connecting the props with redux
export default connect(mapStateToProps, { addFlashMessage })(AdminPortal);