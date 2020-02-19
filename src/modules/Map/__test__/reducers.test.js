import {route} from "../reducers";

describe('route reducer', () => {
    let action;

    it('returns default state if not action type is recognized', () => {
        expect(route({}, {type: null})).toEqual({});
    });

    it('should update state with status and coordinates', () => {
        const coordinates =  [[10, 20], [30, 40]];
        action = {
            type: 'ROUTE_SUCCESS',
            payload: coordinates

        };

        expect(route({}, action)).toEqual({
            status: true,
            coordinates: coordinates,
            pending: false
        })
    });
    it('should update the list of addresses', () => {
        const testPayload = ['some address', 'some other address'];
        const [address1, address2] = testPayload;
        action = {
            type: 'FETCH_ADDRESS_SUCCESS',
            payload: [address1, address2]
        };

        expect(route({}, action)).toEqual({
            addressList: [address1, address2],
            errors: null,
            pending: false
        })
    });

    it('should reset state if receives cancel action', () => {
        const cancelPayload = null;
        action = {
            type: 'CANCEL_ORDER',
            payload: cancelPayload
        };

        expect(route({}, action)).toEqual({
            status: false,
            coordinates: cancelPayload
        })
    })
});