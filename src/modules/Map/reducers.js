import {handleActions} from "redux-actions";
import {cancelOrder, fetchAddressSuccess, fetchRouteFailure, fetchRouteRequest, fetchRouteSuccess} from "./actions";


export const route = handleActions({
    [fetchAddressSuccess]: (state, action) => ({
        ...state,
        addressList: action.payload,
        pending: false,
        errors: null
    }),
    [fetchRouteRequest]: state => ({
        ...state,
        pending: true,
        errors: null
    }),
    [fetchRouteSuccess]: (state, action) => ({
        ...state,
        status: true,
        coordinates: action.payload,
        pending: false
    }),
    [cancelOrder]: (state, action) => ({
        ...state,
        status: false,
        coordinates: action.payload
    }),
    [fetchRouteFailure]: (state, action) => ({
        ...state,
        errors: action.payload,
        pending: false
    })
},{
    status: false,
    addressList: null,
    coordinates: null,
    pending: false,
    errors: null
});
