import './scss/App.scss'
import React, {useState} from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Map from './components/Map'
import Login from './components/Login'

const Pages = {
    profile: () => <Profile data-testid="Profile"/>,
    map: () => <Map data-testid="Map"/>,
    login: () => <Login data-testd="Login"/>,
};

export const Context = React.createContext();

const App = () => {
    const [currentPage, setPage] = useState('login');
    const [isLoggedIn, setLoggedIn] = useState(false);

    const status = {
        login: (email, password) => {
            if(email !== '' && password !== '') {
                setLoggedIn(true);
                setPage('map');
            }
        },

        logout: () => {
            setLoggedIn(false);
            setPage('login')
        }
    };

    return (
        <>
            <Context.Provider value={status}>
                {isLoggedIn && <Header setPage={setPage} data-testid="Header"/> }
                {Pages[currentPage]()}
            </Context.Provider>
        </>
    )
};

export default App;
