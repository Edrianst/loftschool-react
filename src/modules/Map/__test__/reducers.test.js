import {address, route, order, cancel} from "../reducers";

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

describe('order reducer', () => {
    let action;

    it('should return default state if no action type is recognized', () => {
        expect(order({}, {type: null})).toEqual({});
    });

    it('should set state to true if receives make order action', () => {
        action = {
            type: 'MAKE_ORDER'
        };

        expect(order({}, action)).toEqual(true);
    });

    it('should set state to false if receives cancel action', () => {
        action = {
          type: 'CANCEL_ORDER'
        };

        expect(order({}, action)).toEqual(false);
    })
});

describe('cancel reducer', () => {
    let action;

    it('should return default state if no action type is recognized', () => {
        expect(cancel({}, {type: null})).toEqual({});
    });

    it('should set state to true if receives make order action', () => {
        action = {
            type: 'CANCEL_ORDER'
        };

        expect(cancel({}, action)).toEqual(true);
    });

    it('should set state to false if receives cancel action', () => {
        action = {
            type: 'MAKE_ORDER'
        };

        expect(cancel({}, action)).toEqual(false);
    })
});