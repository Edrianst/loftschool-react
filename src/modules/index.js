import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";
import { auth } from './Auth';
import { profile } from './Profile';
import { route } from './Map';
import { sagas as authSaga } from "./Auth/";
import { sagas as profileSaga } from "./Profile/";
import { sagas as MapSaga } from "./Map/";

export default combineReducers({
    auth,
    profile,
    route
});

export function* rootSaga () {
    yield fork(authSaga);
    yield fork(profileSaga);
    yield fork(MapSaga);
}