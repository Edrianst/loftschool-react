import { call, put, takeLatest, fork } from "redux-saga/effects";
import { fetchAuthFailure, fetchAuthRequest, fetchAuthSuccess } from "./actions";
import { authRequest } from "./api";

function* fetchAuthWatcher () {
    yield takeLatest(fetchAuthRequest, authorizationSaga);
}

function* authorizationSaga(action) {
    try {
        const response = yield call(authRequest, action.payload);
        response.success ? yield put(fetchAuthSuccess(response)) : yield put(fetchAuthFailure(response));
    } catch (err) {
        yield put(fetchAuthFailure(err))
    }
}

export default function* () {
    yield fork(fetchAuthWatcher)
}
