// Imports
import axios from "axios";

// ----------------------------------------------------------------------------------- //
// Signup AJAX post
export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post("/api/users", userData)
    }
}