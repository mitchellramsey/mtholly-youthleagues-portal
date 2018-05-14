// Imports
import axios from "axios";

// ----------------------------------------------------------------------------------- //
// Test route for authentication middleware in express
export function gameGetRequest(data) {
    return dispatch => {
        return axios.post("/api/gameGetRoute", data);
    }
}