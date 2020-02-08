import {createAction} from "redux-actions";
import {cancelOrder as cancel, routeFailure, routeRequest, routeSuccess, addressRequest as address, addressSuccess, addressFailure} from "../Shared/types";

export const fetchAddressRequest = createAction(address);
export const fetchAddressSuccess = createAction(addressSuccess);
export const fetchAddressFailure = createAction(addressFailure);

export const fetchRouteRequest = createAction(routeRequest);
export const fetchRouteSuccess = createAction(routeSuccess);
export const fetchRouteFailure = createAction(routeFailure);
export const cancelOrder = createAction(cancel);