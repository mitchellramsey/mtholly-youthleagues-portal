// Imports
import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import PropTypes from "prop-types";

// Actions
import { logout } from "../../actions/login";

// CSS
import "./nav.css";

// ----------------------------------------------------------------------------------- //
// Creating the Nav component
class Nav extends Component {

    // Log out function
    logout(event) {
        // Prevents page refresh
        event.preventDefault();
        this.props.logout(this.state).then(
            (res) => this.context.router.history.push("/")
        );
    }

    render() {
        // Acessing authenticated property
        const { isAuthenticated } = this.props.auth
        const { username } = this.props.auth.user
        // Logged in user links
        const userLink = (
            <ul>
                <li className="log-out">{username}<Link to="/" className="links nav-item" onClick={this.logout.bind(this)}>Log Out</Link></li>
            </ul>
        )

        /* If user is authenticated render a certain link */
        return (
            <nav className="navbar navbar-expand-lg">
                { isAuthenticated ? userLink : null }
            </nav>
        )
    }
}

// ----------------------------------------------------------------------------------- //
// Setting PropTypes
Nav.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

Nav.contextTypes = {
    router: PropTypes.object.isRequired
}

// Needing to access redux store
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

// ----------------------------------------------------------------------------------- //
// Exporting the Nav component and connecting
export default connect(mapStateToProps, { logout })(Nav);