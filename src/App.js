import './scss/App.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Map from './components/Map/Map'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const App = ({ isLoggedIn }) => {
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

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

App.defaultProps = {
    isLoggedIn: false
};

const mapStateToProps = state => ({isLoggedIn: state.isLoggedIn});

export default connect(
        mapStateToProps
)(App);

