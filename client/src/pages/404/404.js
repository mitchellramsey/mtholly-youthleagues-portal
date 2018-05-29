// Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";
import connect from "react-redux/lib/connect/connect";
import PropTypes from "prop-types";

// Images
import NotFoundGif from "../../assets/images/NotFoundGif.gif";

// CSS
import "../403/403.css";

// ----------------------------------------------------------------------------------- //

class NotFound extends Component {
    // Render the page
    render() {

        // Deconstructing the object
        const { isAuthenticated, parent, coach, admin } = this.props.auth;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <div className="col-md-8 mx-auto text-center">
                            <span className="forbidden-span text-center">404</span>
                            <span className="forbidden-text">Not Found</span>
                        </div>
                        <div className="col-md-6 right-image-div mr-auto">
                            <img src={NotFoundGif} alt="404 not found" />
                        </div>
                        <div className="col-md-6 left-nf-div ml-auto text-center">
                            <span className="forbidden-text">It appears this page is empty. Try
                            
                            {/* Conditional redirect based on auth role */}
                            {  isAuthenticated && parent ? 
                                <Link className="home-image-link" to="/parent-portal">here</Link>
                            :
                                isAuthenticated && coach ? 
                                <Link className="home-image-link" to="/coachesportal">here</Link> 
                            :
                                isAuthenticated && admin ? 
                                <Link className="home-image-link" to="/adminportal">here</Link>
                            :
                                <Link className="home-image-link" to="/">here</Link>
                            }
                              instead</span>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// ---------------------------------------------------------------------------------------------------- //
// Setting propTypes
NotFound.propTypes = {
    auth: PropTypes.object.isRequired
  }
  
  
  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

// ---------------------------------------------------------------------------------------------------- //
// Exporting the form component and connecting it with redux
export default connect(mapStateToProps)(NotFound);
