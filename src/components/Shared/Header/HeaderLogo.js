import React from 'react'
import HeaderIcon from '../../../img/logo.svg'

const HeaderLogo = () => {
    return (
        <div className="header__logo">
            <img src={HeaderIcon} width="156" alt="logo" className="header__pic"/>
        </div>
    )
};

export default HeaderLogo;