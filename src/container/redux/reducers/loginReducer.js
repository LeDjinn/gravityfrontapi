import { ActionTypes } from "../contants/action-types"

const initialState = { 
    payload : {
        logged_in: 'unknown',
        user: 'unknown',
    }}

export const loginReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case ActionTypes.SET_LOGIN_STATUS:

            return {...state, payload}
            
        case ActionTypes.SET_LOGOUT_STATUS:

            return {...state, payload}
        default:
            return state;
    }
}
