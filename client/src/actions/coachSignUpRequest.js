// Imports
import axios from "axios";

// ----------------------------------------------------------------------------------- //
// Signup AJAX post
export function coachSignupRequest(userData) {
    return dispatch => {
        return axios.post("/api/coachsignup", userData)
    }
}

// Get route to get the passed input value from the email form text field
export function isCoachExists(query) {
    return dispatch => {
        return axios.get(`/api/coachsignup/${query}`)
    }
}