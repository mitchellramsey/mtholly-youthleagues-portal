// Imports
import axios from "axios";

// ----------------------------------------------------------------------------------- //
// Signup AJAX post
export function coachSignupRequest(userData) {
    return dispatch => {
        return axios.post("/api/coachsignup", userData)
    }
}