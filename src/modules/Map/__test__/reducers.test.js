import {address, route} from "../reducers";

describe('address reducer', () => {

    let action;
    let testPayload = ['some address', 'some other address'];

    it('returns default state, if no action type is recognized', () => {
        expect(address({}, {type: null})).toEqual({});
    });

    it('should update the list of addresses', () => {
        const [address1, address2] = testPayload;
        action = {
            type: 'FETCH_ADDRESS_SUCCESS',
            payload: [address1, address2]
        };

        expect(address({}, action)).toEqual([address1, address2])
    })
});

describe('route reducer', () => {
    let action;
    let routePayload = { status: true, coordinates: [[10, 20], [30, 40]]};
    let cancelPayload = { status: false, coordinates: null};

    it('returns default state if not action type is recognized', () => {
        expect(route({}, {type: null})).toEqual({});
    });

    it('should update state with status and coordinates', () => {
        const {status, coordinates} = routePayload;
        action = {
            type: 'ROUTE_SUCCESS',
            payload: {
                status: status,
                coordinates: coordinates
            }
        };

        expect(route({}, action)).toEqual({
            status: status,
            coordinates: coordinates
        })
    });

    it('should reset state if receives cancel action', () => {
        const {status, coordinates} = cancelPayload;
        action = {
            type: 'CANCEL_ORDER',
            payload: {
                status: status,
                coordinates: coordinates
            }
        };

        expect(route({}, action)).toEqual({
            status: status,
            coordinates: coordinates
        })
    })
});