// Imports
import React from "react";
import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";

// Actions
import { addFlashMessage } from "../actions/flashMessages";
import { logout } from "../actions/login";

// ----------------------------------------------------------------------------------- //
// Creating component wrapper
export default function(ComposedComponent) {
    class CoachAuthenticateRoutes extends Component {
        
        componentWillMount() {
            // If user isnt authenticated
            if(!this.props.isAuthenticated || !this.props.coach) {
                this.props.addFlashMessage({
                    type: "error",
                    text: "You need to login to access this page"
                });
                // Then redirect
                this.context.router.history.push("/403");
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
CoachAuthenticateRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
}

CoachAuthenticateRoutes.contextTypes = {
    router: PropTypes.object.isRequired
}

// Accessing redux store
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        coach: state.auth.coach
    }
}

// ----------------------------------------------------------------------------------- //
    return connect(mapStateToProps, { addFlashMessage, logout })(CoachAuthenticateRoutes);
}

