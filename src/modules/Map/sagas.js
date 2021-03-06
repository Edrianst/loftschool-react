import {call, put, fork, takeLatest} from "redux-saga/effects";
import {fetchAddressFailure, fetchAddressRequest, fetchAddressSuccess, fetchRouteFailure, fetchRouteRequest, fetchRouteSuccess} from "./actions";
import { addressRequest, routesRequest } from './api'


function* fetchAddressListWatcher() {
    yield takeLatest(fetchAddressRequest, addressListSaga)
}

function* fetchRouteWatcher () {
    yield takeLatest(fetchRouteRequest, routeSaga)
}

export function* addressListSaga() {
    try{
        const response = yield call(addressRequest);
        yield put(fetchAddressSuccess(response.addresses))
    } catch (err) {
        yield put(fetchAddressFailure(err))
    }
}

export function* routeSaga(action) {
    try {
        const response = yield call(routesRequest, action.payload);
        yield put(fetchRouteSuccess(response))
    } catch (err) {
        yield put(fetchRouteFailure(err));
    }
}

export default function* () {
    yield fork(fetchAddressListWatcher);
    yield fork(fetchRouteWatcher);
}