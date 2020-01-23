import React from 'react'
import HeaderIcon from '../img/header-logo.png'

const HeaderLogo = () => {
    return (
            <>
                <div className="header__logo">
                    <img src={HeaderIcon} alt="" className="header__pic"/>
                </div>
            </>
    )
};

export default HeaderLogo;