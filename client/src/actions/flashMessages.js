// Imports
import { ADD_FLASH_MESSAGE } from "./types";
import { DELETE_FLASH_MESSAGE } from "./types";
// Adding the flash message
export function addFlashMessage(message) {
    return {
        type: ADD_FLASH_MESSAGE,
        message
    }
}

// Deleting the flash message
export function deleteFlashMessage(id) {
    return {
        type: DELETE_FLASH_MESSAGE,
        id
    }
}