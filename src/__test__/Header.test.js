import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../components/Shared/Header/Header';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

it('renders correctly', () => {
    const setPage = jest.fn();
    const logout = jest.fn();
    const {queryByTestId} = render(<Header setPage={setPage} />);

    window.URL.createObjectURL = jest.fn();

    expect(queryByTestId('Header')).toBeTruthy();
});

describe('menu-item', ()=> {
    it('triggers setPage function', ()=> {
        const setPage = jest.fn();
        const {queryByTestId} = render(<Header setPage={setPage} /> );

        fireEvent.click(queryByTestId(0));

        expect(setPage).toHaveBeenCalled();
    })
});