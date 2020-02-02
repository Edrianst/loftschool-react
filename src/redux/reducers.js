import {
    fetchAuthFailure,
    fetchAuthRequest,
    fetchAuthSuccess,
    fetchProfileFailure,
    fetchProfileRequest,
    fetchProfileSuccess,
    logoutAction
} from "./actions";

import { handleActions } from 'redux-actions';
import { combineReducers } from "redux";

const isLoggedIn = handleActions({
    [fetchAuthSuccess]: () => true,
    [logoutAction]: () => false
}, false);

const pending = handleActions({
    [fetchAuthRequest]: () => true,
    [fetchAuthSuccess]: () => false,
    [fetchAuthFailure]: () => false,
    [fetchProfileRequest]: () => true,
    [fetchProfileSuccess]: () => false,
    [fetchProfileFailure]: () => false
}, false);

const profile = handleActions({
    [fetchProfileSuccess]: (state, action) => action.payload
}, {
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvc: '',
    token: ''
});

const error = handleActions({
    [fetchAuthFailure]: (state, action) => action.payload,
    [fetchProfileFailure]: (state, action) => action.payload,
    [fetchAuthRequest]: () => null,
    [fetchProfileRequest]: () => null
}, null);

export default combineReducers({
    isLoggedIn,
    pending,
    profile,
    error
});
