// Imports
import axios from "axios";

// Test route for authentication middleware in express
export function addPractice(data) {
    return dispatch => {
        return axios.post("/api/practicePost", data);
    }
}