import React from 'react'
import LoginForm from './LoginForm'
import Logo from '../../shared/Logo'
import AuthContainer from "../../shared/AuthContainer"

const Login = () => {
    return (
        <AuthContainer>
            <Logo />
            <LoginForm/>
        </AuthContainer>
    )
};


export default Login;