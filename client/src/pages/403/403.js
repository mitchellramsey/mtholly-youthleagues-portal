// Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";
import connect from "react-redux/lib/connect/connect";
import PropTypes from "prop-types";

// Images
import lock from "../../assets/images/lock.png";

// CSS
import "./403.css";

// ----------------------------------------------------------------------------------- //

class Forbidden extends Component {
    // Render the page
    render() {
        // Deconstructing the object
        const { isAuthenticated, parent, coach, admin } = this.props.auth;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <div className="col-md-8 mx-auto text-center">
                            <span className="forbidden-span text-center">403</span>
                            <span className="forbidden-text">Unauthorized</span>
                        </div>

                        <div className="col-md-8 mx-auto text-center lock">
                            <img src={lock} alt="lock"/>   
                            <span className="image-text">Oops, it looks like you tried to access something you shouldn't have. Go
                            
                            {/* Conditional redirect based on auth role */}
                            {  isAuthenticated && parent ? 
                                <Link className="home-link" to="/parent-portal">here</Link>
                            :
                                isAuthenticated && coach ? 
                                <Link className="home-link" to="/coachesportal">here</Link> 
                            :
                                isAuthenticated && admin ? 
                                <Link className="home-link" to="/adminportal">here</Link>
                            :
                                <Link className="home-link" to="/">here</Link>
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
Forbidden.propTypes = {
    auth: PropTypes.object.isRequired
  }
  
  
  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

// ---------------------------------------------------------------------------------------------------- //
// Exporting the form component and connecting it with redux
export default connect(mapStateToProps)(Forbidden);