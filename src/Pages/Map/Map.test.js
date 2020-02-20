import React from 'react';
import {createStore} from 'redux';
import {route} from "../../modules/Map";
import { Provider } from "react-redux";
import { OrderForm } from './OrderForm';
import {render} from "@testing-library/react";

const store = createStore(route, {
    route: {
        addressList: ['some address', 'some other address'],
        status: false
    }
});

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe('order form', () => {
    it('renders correctly without crashing', () => {
        const {queryByTestId} = render(<Provider store={store}><OrderForm /></Provider>);

        expect(queryByTestId('order-form')).toBeTruthy();
    })
});