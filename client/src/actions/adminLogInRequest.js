// Imports
import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_ADMIN } from "./types";

// Redux imports
import { store } from "../Shared/Store/Store";


// ----------------------------------------------------------------------------------- //
// Creating an action for SET_CURRENT_USER
export function setCurrentAdmin(user) {
    return {
        type: SET_CURRENT_ADMIN,
        user
    }
}

// Signup AJAX post
export function adminLogInRequest(data) {
    return dispatch => {
        return axios.post("/api/auth/admin", data).then(res => {
            // Saving token to user localStorage
            // Decoded token
            const token = res.data.token;
            localStorage.setItem("jwtToken", token);

            const decoded = jwt_decode(token);
            // Importing the authToken function
            // Passing it the token
            setAuthorizationToken(token);
            dispatch(setCurrentAdmin(decoded));

            // If JWT token exists, set it
            if(localStorage.jwtToken) {
                setAuthorizationToken(localStorage.jwtToken);
                // Dispatch the action
                store.dispatch(setCurrentAdmin(jwt_decode(localStorage.jwtToken)))
            }
        })
    }
}

