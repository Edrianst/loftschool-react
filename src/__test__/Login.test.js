import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from '../components/Login/Login';

it('renders correctly', () => {
    const {queryByTestId} = render(<Login />);

    expect(queryByTestId("Login")).toBeTruthy();
});