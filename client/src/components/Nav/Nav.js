// Imports
import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/login";
import { connect } from "react-redux"
import PropTypes from "prop-types";
import "./nav.css";

// Creating the Nav component
class Nav extends Component {

    // Log out function
    logout(event) {
        // Prevents page refresh
        event.preventDefault();
        this.props.logout();
    }

    render() {
        // Acessing authenticated property
        const { isAuthenticated } = this.props.auth
        // Logged in user links
        const userLink = (
            // User log out
            <ul className="ml-auto"><Link to="/" className="links" onClick={this.logout.bind(this)}>Log Out</Link></ul>
        )
        // Normal Nav links
        const normalLinks = (
            <ul><Link to="/" className="links">Home</Link></ul>
        )

        return (
            <nav className="navbar navbar-expand-lg">
                { isAuthenticated ? userLink : normalLinks }
            </nav>
        )
    }
}

// Setting PropTypes
Nav.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

// Needing to access redux store
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

// Exporting the Nav component and connecting
export default connect(mapStateToProps, { logout })(Nav);