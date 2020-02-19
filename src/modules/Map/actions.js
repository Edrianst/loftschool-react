import {createAction} from "redux-actions";
import {cancelOrder as cancel,makeOrder as make, routeFailure, routeRequest, routeSuccess, addressRequest as address, addressSuccess, addressFailure} from "../types";

export const fetchAddressRequest = createAction(address);
export const fetchAddressSuccess = createAction(addressSuccess);
export const fetchAddressFailure = createAction(addressFailure);

export const fetchRouteRequest = createAction(routeRequest);
export const fetchRouteSuccess = createAction(routeSuccess);
export const fetchRouteFailure = createAction(routeFailure);
export const makeOrder = createAction(make);
export const cancelOrder = createAction(cancel);