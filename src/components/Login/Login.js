import React from 'react'
import LoginForm from './LoginForm'
import Logo from '../Shared/Logo'
import AuthContainer from "../Shared/AuthContainer"

const Login = () => {
    return (
        <AuthContainer>
            <Logo />
            <LoginForm/>
        </AuthContainer>
    )
};


export default Login;