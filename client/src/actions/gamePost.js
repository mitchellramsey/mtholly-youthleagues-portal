// Imports
import axios from "axios";

// ----------------------------------------------------------------------------------- //
// Test route for authentication middleware in express
export function createGamePost(data) {
    return dispatch => {
        return axios.post("/api/createGame", data);
    }
}

// ----------------------------------------------------------------------------------- //
// GET route for games
export function getGame(id) {
    return dispatch => {
        return axios.get(`/api/createGame/${id}`);
    }
}

// ----------------------------------------------------------------------------------- //
// Delete a practice
export function deleteGame(id) {
    return dispatch => {
        return axios.delete(`/api/createGame/${id}`);
    }
}