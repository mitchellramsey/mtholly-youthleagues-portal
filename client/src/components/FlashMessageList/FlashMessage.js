// Imports
import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// CSS
import "./flashmessage.css";

// ----------------------------------------------------------------------------------- //
// Creating the Flash Message component
class FlashMessage extends Component {

    constructor(props) {
        super(props);
        // Binding the onClick function to 'this'
        this.onClick = this.onClick.bind(this);
    }

    // Deleting the message with the associated flash.id
    onClick() {
        this.props.deleteFlashMessage(this.props.message.id);
    }

    render() {
        // Deconstructing the variable
        const { type, text } = this.props.message;

        // Div that renders alert boxes based on type
        return (
            <div className={classnames("alert", {
                "alert-success": type === "succuess",
                "alert-danger": type === "error"
            })}>
                {/* Close button */}
                <button className="close" onClick={this.onClick}><span>&times;</span></button>
                {/* Alert text */}
                {text}
            </div>

        )
    }
}
// ----------------------------------------------------------------------------------- //
// Setting propTypes
FlashMessage.propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

// ----------------------------------------------------------------------------------- //
// Exporting the component
export default FlashMessage;