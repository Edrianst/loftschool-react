import React from 'react';
import { render } from '@testing-library/react';
import Map from '../components/Map/Map';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

it('renders correctly', () => {
    window.URL.createObjectURL = jest.fn();

    const {queryByTestId} = render(<Map />);

    expect(queryByTestId("Map")).toBeTruthy();
});