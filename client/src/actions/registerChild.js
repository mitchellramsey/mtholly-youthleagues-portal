// Imports
import axios from "axios";

// Test route for authentication middleware in express
export function childSignUp(info) {
    return dispatch => {
        return axios.post("/api/registerChild", info);
    }
}