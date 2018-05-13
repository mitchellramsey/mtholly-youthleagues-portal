// Imports
import axios from "axios";

// ----------------------------------------------------------------------------------- //
// Test route for authentication middleware in express
export function parentSubmit(info) {
    return dispatch => {
        return axios.post("/api/parentSubmit", info);
    }
}