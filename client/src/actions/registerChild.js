// Imports
import axios from "axios";

// Test route for authentication middleware in express
export function childSignUp(data) {
    return dispatch => {
        return axios.post("/api/registerChild", data);
    }
}