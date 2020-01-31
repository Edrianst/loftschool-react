import './scss/App.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Map from './components/Map/Map'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from "react-redux";

const App = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    return (
        <>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/map" render={() => (<><Header/> <Map/></>)}/>
                <Route path="/profile" render={() => (<><Header/><Profile/></>)}/>
            </Switch>
            {isLoggedIn ? <Redirect to="/map"/> : <Redirect to="/login"/> }
        </>
    )
};

export default App;

