// Imports
import axios from "axios";

// ----------------------------------------------------------------------------------- //
export function coachGetRequest(info) {
    return dispatch => {
        return axios.post("/api/coachesGetRoute", info);
    }
}