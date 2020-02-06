import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import  LoginForm from '../components/Login/LoginForm';
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import MockStore from 'redux-mock-store';

const mockstore = MockStore();
const store = mockstore({
     isLoggedIn: false
});

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

jest.mock('react-router-dom', () => ({
    useHistory: jest.fn(),
    Link: (props) => (<>{props.children}</>)
}));

jest.mock("react-redux", () => ({
    Provider: (props) => (<>{props.children}</>),
    useSelector: () => (false),
    useDispatch: jest.fn()
}));

it('renders correctly', () => {
    const {queryByTestId} = render(<Provider store={store}><LoginForm /></Provider>);

    expect(queryByTestId("LoginForm")).toBeTruthy();
});

describe('Submit button', () => {
    describe('with both empty fields', () => {
        it('does not trigger login function', () => {
            const {queryByTestId} = render(<Provider store={store}><LoginForm /></Provider>);

            fireEvent.click(queryByTestId('authButton'));

            expect(useDispatch).toHaveBeenCalled();
        })
    });
});