import {ActionTypes} from '../contants/action-types';

export const setLoginStatus = (status) => {
    return {
        type: ActionTypes.SET_LOGIN_STATUS,
        payload: status,
}

}

export const setLogoutStatus = () => {
    return {
        type: ActionTypes.SET_LOGOUT_STATUS
}

}