import React from 'react';
import { render } from '@testing-library/react';
import Profile from '../components/Profile';

it('renders correctly', () => {
    const {queryByTestId} = render(<Profile />);

    expect(queryByTestId('Profile')).toBeTruthy();
});