import {handleActions} from "redux-actions";
import {cancelOrder, fetchAddressSuccess, fetchRouteSuccess} from "./actions";

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
