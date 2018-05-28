// Imports
import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_COACH } from "./types";
import { store } from "../Shared/Store/Store";

// ----------------------------------------------------------------------------------- //
// Creating an action for SET_CURRENT_USER
export function setCurrentCoach(user) {
    return {
        type: SET_CURRENT_COACH,
        user
    }
}

// Signup AJAX post
export function coachesLogInRequest(data) {
    return dispatch => {
        return axios.post("/api/auth/coaches", data).then(res => {
            // Saving token to user localStorage
            // Decoded token
            const token = res.data.token;
            localStorage.setItem("jwtToken", token);

            // If JWT token exists, set it
            if(localStorage.jwtToken) {
                setAuthorizationToken(localStorage.jwtToken);
                // Dispatch the action
                store.dispatch(setCurrentCoach(jwt_decode(localStorage.jwtToken)))
            }
        })
    }
}

