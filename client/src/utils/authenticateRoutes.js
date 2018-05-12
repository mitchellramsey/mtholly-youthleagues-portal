// Imports
import React from "react";
import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";

// Actions
import { addFlashMessage } from "../actions/flashMessages";

// ----------------------------------------------------------------------------------- //
// Creating component wrapper
export default function(ComposedComponent) {
    class authenticateRoutes extends Component {
        
        componentWillMount() {
            // If user isnt authenticated
            if(!this.props.isAuthenticated) {
                this.props.addFlashMessage({
                    type: "error",
                    text: "You need to login to access this page"
                });
                // Then redirect
                this.context.router.history.push("/");
            }
        }

        // Render the wrapper
        render() {
            return (
                <ComposedComponent {...this.props}/>
            )
        }
    }

// ----------------------------------------------------------------------------------- //
// Setting propTypes
authenticateRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

authenticateRoutes.contextTypes = {
    router: PropTypes.object.isRequired
}

// Accessing redux store
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

// ----------------------------------------------------------------------------------- //
    return connect(mapStateToProps, { addFlashMessage })(authenticateRoutes);
}

