// Imports
import { combineReducers } from "redux";
import flashMessages from "./flashMessages";
import authReducer from "./authReducer";

export default combineReducers({
    authReducer,
    flashMessages
});