import './scss/App.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Map from './components/Map/Map'
import Login from './components/Login/Login'
import withAuth from './HOCs/Auth'
import { Route, Switch, Redirect } from 'react-router-dom'

const App = ({isLoggedIn}) => {
        return (
                <>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/map" component={() => (<><Header/> <Map/></>)}/>
                        <Route path="/profile" component={() => (<><Header/> <Profile/></>)}/>
                    </Switch>
                    {isLoggedIn ? <Redirect to="/map"/> : <Redirect to="/login"/> }
                </>
        )
};

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

App.defaultProps = {
    isLoggedIn: false
};

export default withAuth(App);
