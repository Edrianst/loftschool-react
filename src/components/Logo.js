import React from 'react'
import LogoIcon from '../img/logo.png'

const Logo = () => {
    return (
        <>
            <div className="logo">
                <img src={LogoIcon} alt="" className="logo__icon"/>
            </div>
        </>
    )
};

export default Logo;