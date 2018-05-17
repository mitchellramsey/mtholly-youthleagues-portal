// Imports
import axios from "axios";

//  -------------------------------------------------------
// Adding a team from Admin portal
export function addTeam(data) {
    return dispatch => {
        return axios.post("/api/teamPost", data);
    }
}