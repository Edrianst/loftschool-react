import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../components/Header/Header';

it('renders correctly', () => {
    const {queryByTestId} = render(<Header />);

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