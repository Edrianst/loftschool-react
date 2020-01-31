import React from 'react'
import SignupForm from './SignupForm'
import Logo from '../../shared/Logo'
import AuthContainer from "../../shared/AuthContainer"

const Signup = () => {
    return (
        <AuthContainer>
            <Logo />
            <SignupForm/>
        </AuthContainer>
    )
};

export default Signup;