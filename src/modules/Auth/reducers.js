import {handleActions} from "redux-actions";
import {fetchAuthSuccess, logoutAction} from "./actions";
import {combineReducers} from "redux";

export const isLoggedIn = handleActions({
    [fetchAuthSuccess]: () => true,
    [logoutAction]: () => false
}, false);
