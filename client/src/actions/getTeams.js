// Import axios
import axios from "axios";

// ----------------------------------------------------------------------------------- //
// Find associated teams
export function getTeam(id) {
    return dispatch => {
        return axios.get(`/api/getCoachTeam/${id}`);
    }
}


