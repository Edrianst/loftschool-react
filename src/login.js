import React from 'react';
import Map from './map'
import LoginForm from './login-form';

class Login extends React.Component {

    state = {
        isAuth: false
    };

    redirectForm = e => {
        e.preventDefault();
        this.setState({isAuth: true})
    };

    render() {
        return (
            <>
                {this.state.isAuth ? <Map /> : <LoginForm redirect={this.redirectForm}/>}
            </>
        )
    }
}

export default Login;