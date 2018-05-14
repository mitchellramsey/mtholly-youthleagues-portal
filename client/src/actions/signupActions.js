// Imports
import axios from "axios";

// ----------------------------------------------------------------------------------- //
// Signup AJAX post
export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post("/api/users", userData)
    }
}

// Get route to get the passed input value from the email form text field
export function isUserExists(identifier) {
    return dispatch => {
        return axios.get(`/api/users/${identifier}`)
    }
}