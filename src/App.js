import './scss/App.scss'
import React from 'react'
import { Profile } from './Pages/Profile'
import { Map } from './Pages/Map'
import { Login } from './Pages/Login'
import { Signup } from './Pages/Signup'
import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from "./Shared/PrivateRoute";

const App = () => {
    return (
        <>
            <Switch>
                <PrivateRoute exact path="/map" component={Map}/>
                <PrivateRoute exact path="/profile" component={Profile}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Redirect to="/map"/>
            </Switch>
        </>
    )
};

export default App;

