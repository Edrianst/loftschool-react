import {createAction} from "redux-actions";
import {profileFailure, profileRequest as profile, profileSuccess} from "../types";

export const fetchProfileRequest = createAction(profile);
export const fetchProfileSuccess = createAction(profileSuccess);
export const fetchProfileFailure = createAction(profileFailure);