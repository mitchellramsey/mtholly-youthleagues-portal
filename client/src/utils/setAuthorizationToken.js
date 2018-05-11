// Imports
import axios from "axios";

// Exporting the function
export default function setAuthorizationToken(token) {
    // If token is present add this to every authorization header request after
    if(token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        // Delete
        delete axios.defaults.headers.common["Authorization"];
    }
}