import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { Provider } from "react-redux";
import { OrderForm } from '../OrderForm';
import MockStore from 'redux-mock-store';

const mockstore = MockStore();
const store = mockstore({
    address: [],
    profile: {
        cardName: 'name'
    }
});

jest.mock("react-redux", () => ({
    Provider: (props) => (<>{props.children}</>),
    useSelector: () => ([]),
    useDispatch: jest.fn()
}));

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe('submit button', () => {
    it('triggers function', () => {
        const {queryByTestId} = render(<Provider store={store}><OrderForm /></Provider>);

        fireEvent.click(queryByTestId('submit'));

        expect(queryByTestId('submit')).toBeTruthy();
        expect(useDispatch).toHaveBeenCalled();
    })
});