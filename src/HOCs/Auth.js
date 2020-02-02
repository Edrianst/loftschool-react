import React, { useState, createContext } from 'react'

export const Context = createContext();

export default (WrappedComponent) => () => {

    const [isLoggedIn, setLoggedIn] = useState(false);

    const status = {

        login: (email, password) => {
            if(email !== '' && password !== '') {
                setLoggedIn(true);
            }
        },

        logout: () => {
            setLoggedIn(false);
        }
    };

    return (
        <Context.Provider value={status}>
            <WrappedComponent isLoggedIn={isLoggedIn}/>
        </Context.Provider>
    )
}