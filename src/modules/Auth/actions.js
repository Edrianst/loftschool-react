import {createAction} from "redux-actions";
import {authFailure as failure, authRequest as auth, authSuccess as success, logoutAction as logout} from "../types";

export const fetchAuthRequest = createAction(auth);
export const fetchAuthSuccess = createAction(success);
export const fetchAuthFailure = createAction(failure);
export const logoutAction = createAction(logout);