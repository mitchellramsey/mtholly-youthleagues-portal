// Imports
import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from "./types";
import { store } from "../Shared/Store/Store";

// Actions
import { setCurrentCoach } from "../actions/coachesLogInRequest";
import { setCurrentAdmin } from "../actions/adminLogInRequest";

// ----------------------------------------------------------------------------------- //
// Creating an action for SET_CURRENT_USER
export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

// Logout action
export function logout() {
    return dispatch => {
        return axios.get("/").then(res => {
            // Remove token upon logout
            // Clears authorization
            localStorage.removeItem("jwtToken");
            setAuthorizationToken(false);
            dispatch(setCurrentUser({}) || setCurrentCoach({}) || setCurrentAdmin({}));
        })
    }
}


// Signup AJAX post
export function loginRequest(data) {
    return dispatch => {
        return axios.post("/api/auth", data).then(res => {
            // Saving token to user localStorage
            // Decoded token
            const token = res.data.token;
            localStorage.setItem("jwtToken", token);

            // If JWT token exists, set it
            if(localStorage.jwtToken) {
                setAuthorizationToken(localStorage.jwtToken);
                // Dispatch the action
                store.dispatch(setCurrentUser(jwt_decode(localStorage.jwtToken)))
            }
        })
    }
}
