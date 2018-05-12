// Imports
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { deleteFlashMessage } from "../../actions/flashMessages";
import PropTypes from "prop-types";

// Component
import FlashMessage from "./FlashMessage";

// ----------------------------------------------------------------------------------- //

// Creating the FlashMessageList component
class FlashMessageList extends Component {
    render() {
        // Mapping over component, setting message and its key
        const messages = this.props.messages.map(message => {
            return <FlashMessage key={message.id} 
                                message={message}
                                deleteFlashMessage={this.props.deleteFlashMessage}
                    />
        });
        // Displayed messages
        return (
            <div>{messages}</div>
        )
    }
}

// ----------------------------------------------------------------------------------- //
// Setting propTypes
FlashMessageList.propTypes = {
    messages: PropTypes.array.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

// Function returning the state of messages
function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}

// ----------------------------------------------------------------------------------- //
// Exporting the connected component
export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList);