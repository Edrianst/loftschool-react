import {handleActions} from "redux-actions";
import {fetchProfileFailure, fetchProfileRequest, fetchProfileSuccess} from "./actions";

export const profile = handleActions({
    [fetchProfileRequest]: state => ({
        ...state,
        pending: true,
        errors: null
    }),
    [fetchProfileSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
        status: true,
        pending: false,
        errors: null
    }),
    [fetchProfileFailure]: (state, action) => ({
        ...state,
        status: false,
        pending: false,
        errors: action.payload
    })
}, {
    status: false,
    cardNumber: null,
    expiryDate: null,
    cardName: null,
    cvc: null,
    pending: false,
    errors: null
});

