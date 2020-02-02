import './scss/App.scss'
import React from 'react'
import Profile from './components/Profile/Profile'
import Map from './components/Map/Map'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";

const App = () => {
    return (
        <>
            <Switch>
                <PrivateRoute exact path="/map" component={Map}/>
                <PrivateRoute exact path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Redirect to="/map"/>
            </Switch>
        </>
    )
};

export default App;

