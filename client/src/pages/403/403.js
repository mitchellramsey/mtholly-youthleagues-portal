// Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import lock from "../../assets/images/lock.png";

// CSS
import "./403.css";

// ----------------------------------------------------------------------------------- //

class Forbidden extends Component {
    // Render the page
    render() {
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
                            <Link className="home-link" to="/">here</Link> instead</span>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// ---------------------------------------------------------------------------------------------------- //
// Exporting the form component and connecting it with redux
export default Forbidden;