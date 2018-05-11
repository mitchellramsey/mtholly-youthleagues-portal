// Imports
import { SET_CURRENT_USER } from "../../actions/types";
import isEmpty from "lodash.isempty";

// State
const initialState = {
    isAuthenticated: false,
    userDetails: {}
};

// Authenticated reducer
export default(state = initialState, action = {}) => {
    switch(action.type) {
            case SET_CURRENT_USER: 
                return {
                    isAuthenticated: !isEmpty(action.user),
                    user: action.user
                }
        default: return state
    }
}