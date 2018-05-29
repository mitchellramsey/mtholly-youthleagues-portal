// Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";

// CSS
import "../403/403.css";

// ----------------------------------------------------------------------------------- //

class NotFound extends Component {
    // Render the page
    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <div className="col-md-8 mx-auto text-center">
                            <span className="forbidden-span text-center">404</span>
                            <span className="forbidden-text">Not Found</span>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

// ---------------------------------------------------------------------------------------------------- //



// ---------------------------------------------------------------------------------------------------- //
// Exporting the form component and connecting it with redux
export default NotFound;