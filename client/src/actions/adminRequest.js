// Imports
import axios from "axios";

// ----------------------------------------------------------------------------------- //
// Test route for authentication middleware in express
export function adminRequest(data) {
    return dispatch => {
        return axios.post("/api/adminControllers", data);
    }
}