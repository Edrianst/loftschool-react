import {authorizationSaga} from "./sagas";
import {put, call} from "redux-saga/effects";
import {fetchAuthSuccess, fetchAuthFailure} from "./actions";
import {authRequest} from "./api";

describe('authorization saga', () => {
    it('should fail if action payload is incorrect', () => {
        const action = {
            payload: null
        };

        const response = {
            success: false,
            error: 'error'
        };
        const gen = authorizationSaga(action);

        expect(gen.next(false).value).toEqual(call(authRequest, action.payload));
        expect(gen.next(response).value).toEqual(put(fetchAuthFailure(response)));
        expect(gen.next().done).toBeTruthy();
    });

    it('should call success action if payload is correct', () => {
        const action = {
            payload: {
                email: 'test',
                password: 'test'
            }
        };

        const response = {
            success: true,
            token: 'some token'
        };

        const gen = authorizationSaga(action);

        expect(gen.next(true).value).toEqual(call(authRequest, action.payload));
        expect(gen.next(response).value).toEqual(put(fetchAuthSuccess(response)));
        expect(gen.next().done).toBeTruthy();
    })
});