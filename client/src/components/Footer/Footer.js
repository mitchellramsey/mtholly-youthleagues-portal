// Imports
import React from "react";
import { Component } from "react";

// Css
import "../Nav/nav.css";

//------------------------------------------------------------------------------
// Creating the Footer
class Footer extends Component {
    // Render the footer
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <span className="resources">Resources</span>
                    
                        </div>
                        <div className="col-md-4 text-center">
                            <span className="resources">Quick Links</span>
                        </div>
                        <div className="col-md-4 text-center">
                            <span className="resources">Docs</span>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
};

export default Footer;