import {handleActions} from "redux-actions";
import {fetchAddressFailure, fetchAddressRequest, fetchAddressSuccess, fetchRouteFailure} from "../Map/actions";
import{fetchAuthFailure, fetchAuthRequest, fetchAuthSuccess} from "../Auth/actions";
import {fetchProfileFailure, fetchProfileRequest, fetchProfileSuccess} from "../Profile/actions";

export const pending = handleActions({
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

export const error = handleActions({
    [fetchAuthFailure]: (state, action) => action.payload,
    [fetchProfileFailure]: (state, action) => action.payload,
    [fetchRouteFailure]: (state, action) => action.payload,
    [fetchAuthRequest]: () => null,
    [fetchProfileRequest]: () => null
}, null);
