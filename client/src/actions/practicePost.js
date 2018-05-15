// Imports
import axios from "axios";

// ----------------------------------------------------------------------------------- //
// Test route for authentication middleware in express
export function createPracticePost(data) {
    return dispatch => {
        return axios.post("/api/createPractice", data);
    }
}