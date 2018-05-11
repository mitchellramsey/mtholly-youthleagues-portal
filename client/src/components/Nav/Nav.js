// Imports
import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

// Creating the Nav component
const Nav = () => (
    <nav className="navbar navbar-expand-lg">
        <Link to="/" className="links">Home</Link>
    </nav>
)

// Exporting the Nav component
export default Nav;