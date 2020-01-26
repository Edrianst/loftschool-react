import React from 'react';
import { render } from '@testing-library/react';
import Profile from '../components/Profile/Profile';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

it('renders correctly', () => {
    window.URL.createObjectURL = jest.fn();
    const {queryByTestId} = render(<Profile />);

    expect(queryByTestId('Profile')).toBeTruthy();
});