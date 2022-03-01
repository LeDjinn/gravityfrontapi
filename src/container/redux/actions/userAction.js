import { ActionTypes } from "../contants/action-types"

export const setUsers = (users) => {
    return {
        type: ActionTypes.SET_USERS,
        payload: users,
    }

};


export const selectedUser = (user) => {
    return {
        type: ActionTypes.SELECTED_USER,
        payload: user,
    }

};


export const removeSelectedUser = (user) => {
    return {
        type: ActionTypes.REMOVE_SELCTED_USER,
        payload: user,
    }
}


