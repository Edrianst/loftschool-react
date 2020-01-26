import React from 'react';
import { render } from '@testing-library/react';
import Map from '../components/Map/Map';

it('renders correctly', () => {
    const {queryByTestId} = render(<Map />);

    expect(queryByTestId("Map")).toBeTruthy();
});