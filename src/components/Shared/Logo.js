import React from 'react'
import LogoIcon from '../../img/logo-white.svg'

const Logo = () => {
    return (
        <div className="logo">
            <img src={LogoIcon} width="156" alt="logo" className="logo__icon"/>
        </div>
    )
};

export default Logo;