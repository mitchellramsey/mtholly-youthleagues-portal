// Imports
import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt from "jsonwebtoken";
import jwt_decode from 'jwt-decode';

// Signup AJAX post
export function loginRequest(data) {
    return dispatch => {
        return axios.post("/api/auth", data).then(res => {
            // Saving token to user localStorage
            // Decoded token
            const token = res.data.token;
            localStorage.setItem("jwtToken", token);

            const decoded = jwt_decode(token);
            // Importing the authToken function
            // Passing it the token
            setAuthorizationToken(token);
            console.log(decoded);
        })
    }
}