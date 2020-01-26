import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from '../components/Login/Login';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

it('renders correctly', () => {
    window.URL.createObjectURL = jest.fn();
    const {queryByTestId} = render(<Login />);

    expect(queryByTestId("Login")).toBeTruthy();
});