import React from 'react'
import SignupForm from './SignupForm'
import Logo from '../Shared/Logo'
import AuthContainer from "../Shared/AuthContainer"

const Signup = () => {
    return (
        <AuthContainer>
            <Logo />
            <SignupForm/>
        </AuthContainer>
    )
};

export default Signup;