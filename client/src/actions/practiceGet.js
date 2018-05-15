// Imports
import axios from "axios";

// ----------------------------------------------------------------------------------- //
// Test route for authentication middleware in express
export function getPractice(data) {
    return dispatch => {
        return axios.post("/api/practiceGetRoute", data);
    }
}