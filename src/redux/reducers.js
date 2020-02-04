import {
    fetchAuthFailure,
    fetchAuthRequest,
    fetchAuthSuccess,
    fetchProfileFailure,
    fetchProfileRequest,
    fetchProfileSuccess,
    fetchAddressSuccess,
    logoutAction,
    fetchAddressRequest,
    fetchAddressFailure
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
    [fetchProfileFailure]: () => false,
    [fetchAddressRequest]: () => true,
    [fetchAddressSuccess]: () => false,
    [fetchAddressFailure]: () => false,
}, false);

const profile = handleActions({
    [fetchProfileSuccess]: (state, action) => action.payload
}, null);

const address = handleActions({
    [fetchAddressSuccess]: (state, action) => action.payload
}, null);

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
    address,
    error
});
