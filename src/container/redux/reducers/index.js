import { combineReducers } from "redux";
import { userReducer, selectedUserReducer } from "./userReducer";
import { loginReducer } from "./loginReducer";

export const reducers = combineReducers({
    allUsers: userReducer,
    user: selectedUserReducer,
    logStatus: loginReducer
});

