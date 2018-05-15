// Imports
import React from "react";
import { Component } from "react";

// CSS
import "../../components/LogInForm/loginform.css";

// ---------------------------------------------------------------------

class RenderRosters extends Component {

    // Render the component
    render() {
        return (
            // Buttons to render certain data
            <div className="button-div">
                <ul className="mx-auto">
                    <li><button className="btn btn-primary form-btn">Create Practice</button></li>
                    <li><button className="btn btn-primary form-btn">Show Team</button></li>
                    <li><button className="btn btn-primary form-btn">Show Schedule</button></li>
                </ul>


            </div>
            
        );

    }
}

export default RenderRosters;





    
