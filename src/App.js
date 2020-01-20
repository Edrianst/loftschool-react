import React from 'react'
import Header from './header'
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

class App extends React.Component {
    state = {
        currentPage: 'profile'
    };

    setPage =  e => {
        this.setState({currentPage: e.target.name});
    };

    render() {
        return (
            <>
              <Header setPage={this.setPage}/>
              {Pages[this.state.currentPage]()}
            </>
        );
    }
}

export default App;
