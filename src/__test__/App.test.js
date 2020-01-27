import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

it("renders correctly", () => {
    window.URL.createObjectURL = jest.fn();

    const {queryByTestId} = render(<App />);

    expect(queryByTestId('App')).toBeTruthy();
});
