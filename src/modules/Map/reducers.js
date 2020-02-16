import {handleActions} from "redux-actions";
import {makeOrder, cancelOrder, fetchAddressSuccess, fetchRouteSuccess} from "./actions";

export const address = handleActions({
    [fetchAddressSuccess]: (state, action) => action.payload
}, null);

export const route = handleActions({
    [fetchRouteSuccess]: (state, action) => action.payload,
    [cancelOrder]: (state, action) => action.payload
},{
    status: false,
    coordinates: null
});

export const order = handleActions({
    [makeOrder]: () => true,
    [cancelOrder]: () => false
}, false);

export const cancel = handleActions({
    [cancelOrder]: () => true,
    [makeOrder]: () => false,
}, false);
