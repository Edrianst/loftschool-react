import {addressListSaga, routeSaga} from "../sagas";
import {call, put} from 'redux-saga/effects';
import {addressRequest, routesRequest} from "../api";
import {fetchAddressSuccess, fetchRouteSuccess} from "../actions";

describe('addressListSaga', () => {

    it('should get addresses list', () => {
        const gen = addressListSaga();
        const response = {
            addresses: ['some address', 'some other address']
        };

        expect(gen.next().value).toEqual(call(addressRequest));
        expect(gen.next(response).value).toEqual(put(fetchAddressSuccess(response.addresses)));
        expect(gen.next().done).toBeTruthy();
    });
});

describe('route saga', () => {
    it('should get coordinates for route', () => {
        let action = {
            address1: 'address1',
            address2: 'address2'
        };
        const gen = routeSaga(action);

        const response = [[10, 10], [20, 20]];

        expect(gen.next().value).toEqual(call(routesRequest, action.payload));
        expect(gen.next(response).value).toEqual(put(fetchRouteSuccess({status: true, coordinates: response})))
    })
});