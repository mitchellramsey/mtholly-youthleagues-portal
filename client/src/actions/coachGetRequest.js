// Imports
import axios from "axios";

// Test route for authentication middleware in express
export function coachGetRequest(info) {
    return dispatch => {
        return axios.post("/api/coachesGetRoute", info);
    }
}