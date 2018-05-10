// Imports
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from "../../actions/types";
import shortid from "shortid";
import findIndex from "lodash.findindex";

export default (state = [], action = {}) => {

    // Switch case for certain action types
    switch(action.type) {
        case ADD_FLASH_MESSAGE: 
            return [
                // Adding to state
                ...state,
                {
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text
                }
            ]
        case DELETE_FLASH_MESSAGE:
            // Searching through state to find a matching ID
            const index = findIndex(state, { id: action.id })

            if(index >= 0) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ]
            }
            return state

        default: return state
    }
}