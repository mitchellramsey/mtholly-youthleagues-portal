// Imports
import axios from "axios";

// Test route for authentication middleware in express
export function retrieveKids(data) {
    return dispatch => {
        return axios.post("/api/retrieveChildren", data);
    }
}