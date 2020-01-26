import React from 'react'
import LoginForm from './LoginForm'
import Logo from './Logo'

const Login = () => {

    return (
        <div className="login" data-testid="Login">
            <div className="container">
                <div className="login__content">
                    <div className="content__part">
                        <Logo />
                    </div>
                    <div className="content__part">
                        <LoginForm data-testid="Login-form"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;