// Imports
import axios from "axios";

// ----------------------------------------------------------------------------------- //
// POST to create practices
export function createPracticePost(data) {
    return dispatch => {
        return axios.post("/api/createPractice", data);
    }
}

// ----------------------------------------------------------------------------------- //
// GET route for practices
export function getPractice(id) {
    return dispatch => {
        return axios.get(`/api/createPractice/${id}`);
    }
}