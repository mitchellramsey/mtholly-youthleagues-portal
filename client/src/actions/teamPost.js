// Imports
import axios from "axios";

// Test route for authentication middleware in express
export function addTeam(data) {
    return dispatch => {
        return axios.post("/api/teamPost", data);
    }
}