import { takeEvery, call, put, fork, take } from 'redux-saga/effects';
import {
    fetchAddressFailure,
    fetchAddressRequest,
    fetchAddressSuccess,
    fetchAuthFailure,
    fetchAuthRequest,
    fetchAuthSuccess, fetchProfileFailure,
    fetchProfileRequest,
    fetchProfileSuccess, fetchRouteFailure, fetchRouteRequest, fetchRouteSuccess
} from "./actions";

const authRequest = (data) =>
    fetch(`https://loft-taxi.glitch.me/${data.path}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)})
            .then(response => response.json());

const setProfile = (data) =>
    fetch('https://loft-taxi.glitch.me/card', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)})
            .then(response => response.json());

const addressRequest = () =>
    fetch('https://loft-taxi.glitch.me/addressList').then(response => response.json());

const routesRequest = (data) =>
        fetch(`https://loft-taxi.glitch.me/route?address1=${data.address1}&address2=${data.address2}`).then(response => response.json());


function* authorizationSaga() {
    while (true) {
        const action = yield take(fetchAuthRequest);
        try {
            const response = yield call(authRequest, action.payload);
            response.success ? yield put(fetchAuthSuccess(response)) : yield put(fetchAuthFailure(response));
        } catch (err) {
            yield put(fetchAuthFailure(err))
        }
    }
}

function* paymentSaga() {
    while (true) {
        const action = yield take(fetchProfileRequest);
        try {
            const response = yield call(setProfile, action.payload);
            response.success ? yield put(fetchProfileSuccess(action.payload)) : yield put(fetchProfileFailure(response));
        } catch (err) {
            yield put(fetchProfileFailure(err))
        }
    }
}

function* addressListSaga() {
    yield takeEvery(fetchAddressRequest, function*() {
        try{
            const response = yield call(addressRequest);
            yield put(fetchAddressSuccess(response.addresses))
        } catch (err) {
            yield put(fetchAddressFailure(err))
        }
    })
}

function* routeSaga() {
    while (true) {
        const action = yield take(fetchRouteRequest);
        try {
            const response = yield call(routesRequest, action.payload);
            yield put(fetchRouteSuccess({status: true, coordinates: response}))
        } catch (err) {
            yield put(fetchRouteFailure(err));
        }
    }
}

export function* rootSaga() {
    yield fork(authorizationSaga);
    yield fork(paymentSaga);
    yield fork(addressListSaga);
    yield fork(routeSaga);
}
