// Imports
import axios from "axios";

// Test route for authentication middleware in express
export function createChild(info) {
    return dispatch => {
        return axios.post("/api/createChild", info);
    }
}