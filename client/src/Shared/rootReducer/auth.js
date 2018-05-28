// Imports
import { SET_CURRENT_USER, SET_CURRENT_COACH, SET_CURRENT_ADMIN } from "../../actions/types";
import isEmpty from "lodash.isempty";

// State
const initialState = {
    isAuthenticated: false,
    coach: false,
    parent: false,
    admin: false,
    user: {}
};

// Authenticated reducer
export default(state = initialState, action = {}) => {
    switch(action.type) {
            case SET_CURRENT_USER: 
                return {
                    isAuthenticated: !isEmpty(action.user),
                    parent: !isEmpty(action.user),
                    user: action.user,
                    coach: false,
                    admin: false
                }
            case SET_CURRENT_COACH: 
                return {
                    isAuthenticated: !isEmpty(action.user),
                    coach: !isEmpty(action.user),
                    user: action.user,
                    parent: false,
                    admin: false
                }
            case SET_CURRENT_ADMIN: 
                return {
                    isAuthenticated: !isEmpty(action.user),
                    admin: !isEmpty(action.user), 
                    user: action.user,
                    parent: false,
                    coach: false
                }
        default: return state
    }
}