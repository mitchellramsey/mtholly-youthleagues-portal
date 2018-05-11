// Imports
import axios from "axios";

// Signup AJAX post
export function loginRequest(data) {
    return dispatch => {
        return axios.post("/api/auth", data)
    }
}