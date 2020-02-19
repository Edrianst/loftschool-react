import {handleActions} from "redux-actions";
import {fetchAuthSuccess, fetchAuthRequest, logoutAction, fetchAuthFailure} from "./actions";

export const auth = handleActions({
    [fetchAuthRequest]: state => ({
        ...state,
        pending: true,
        errors: null
    }),
    [fetchAuthSuccess]: () => ({
        isLoggedIn: true,
        pending: false,
        errors: null
    }),
    [fetchAuthFailure]: (state, action) => ({
        ...state,
        pending: false,
        errors: action.payload
    }),
    [logoutAction]: state => ({
        ...state,
        isLoggedIn: false,
        pending: false,
        errors: null
    })
}, {
    isLoggedIn: false,
    pending: false,
    errors: null
});