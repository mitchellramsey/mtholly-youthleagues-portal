// Imports
import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from "./types";

// Creating an action for SET_CURRENT_USER
export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
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

            const decoded = jwt_decode(token);
            // Importing the authToken function
            // Passing it the token
            setAuthorizationToken(token);
            dispatch(setCurrentUser(decoded));
        })
    }
}