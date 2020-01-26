import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from '../components/Login-form';

it('renders correctly', () => {
    const {queryByTestId} = render(<LoginForm />);

    expect(queryByTestId("Login-form")).toBeTruthy();
});

describe('Submit button', () => {
    describe('with both empty fields',() => {
        it('does not trigger login function', () => {
            const login = jest.fn();

            const {queryByTestId} = render(<LoginForm login={login} />);

            fireEvent.click(queryByTestId('submit-button'));

            expect(login).not.toHaveBeenCalled();
        })
    });

    describe('with one empty field', () => {
        it('does not trigger login function', () => {
            const login = jest.fn();

            const {queryByTestId} = render(<LoginForm login={login} />);
            const loginField = queryByTestId('login-field');
            fireEvent.change(loginField, {target: {value: 'test'}});

            fireEvent.click(queryByTestId('submit-button'));

            expect(login).not.toHaveBeenCalled();
        });

        it('does not trigger login function', () => {
            const login = jest.fn();

            const {queryByTestId} = render(<LoginForm login={login} />);
            const passwordField = queryByTestId('password-field');
            fireEvent.change(passwordField, {target: {value: 'test'}});

            fireEvent.click(queryByTestId('submit-button'));

            expect(login).not.toHaveBeenCalled();
        })
    });

    describe('with fulfilled inputs', () => {
        it('triggers login function', () => {
            const login = jest.fn();

            const {queryBeTestId} = render(<LoginForm login={login} />);
            const loginField = queryBeTestId('login-field');
            const passwordField = queryBeTestId('password-field');
            fireEvent.change(loginField, {target: {value: 'test'}});
            fireEvent.change(passwordField, {target: {value: 'test'}});

            fireEvent.click(queryBeTestId('submit-button'));

            expect(login).toHaveBeenCalled();
        })
    })
});