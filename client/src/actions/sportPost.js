// Imports
import axios from "axios";

//  -------------------------------------------------------
// Adding a Sport from Admin portal
export function addSport(data) {
    return dispatch => {
        return axios.post("/api/sportPost", data);
    }
}