import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";
import { isLoggedIn } from './Auth';
import { profile } from './Profile';
import { address, route, order } from './Map';
import { pending, error} from './Shared/reducers';
import { sagas as authSaga } from "./Auth/";
import { sagas as profileSaga } from "./Profile/";
import { sagas as MapSaga } from "./Map/";

export default combineReducers({
    isLoggedIn,
    profile,
    address,
    route,
    order,
    pending,
    error
});

export function* rootSaga () {
    yield fork(authSaga);
    yield fork(profileSaga);
    yield fork(MapSaga);
}