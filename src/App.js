import './scss/App.scss'
import React, {useState} from 'react'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Map from './components/Map/Map'
import Login from './components/Login/Login'

const Pages = {
    profile: () => <Profile />,
    map: () => <Map />,
    login: () => <Login />
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
                {isLoggedIn && <Header setPage={setPage} /> }
                {Pages[currentPage]()}
            </Context.Provider>
        </>
    )
};

export default App;
