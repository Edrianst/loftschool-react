import React from 'react';
import Profile from './profile'
import Map from './map'
import Login from './login'
import Signup from './signup'

const Pages = {
    profile: () => <Profile/>,
    map: () => <Map/>,
    login: () => <Login/>,
    signup: () => <Signup/>
};

class Header extends React.Component {

    state = {
        currentPage: 'profile'
    };

    handleClick = e => {
        this.setState({currentPage: e.target.name});
    };

    render() {
        return (
            <>
                <div>
                    <button name='profile' onClick={this.handleClick}>Profile</button>
                    <button name='map' onClick={this.handleClick}>Map</button>
                    <button name='login' onClick={this.handleClick}>Login</button>
                    <button name='signup' onClick={this.handleClick}>Signup</button>
                </div>
                {Pages[this.state.currentPage]()}
            </>
        )
    }
}

export default Header;