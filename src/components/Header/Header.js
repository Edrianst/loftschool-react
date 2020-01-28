import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'

const Header = () => {

    return (
        <header className="header" data-testid="Header">
            <div className="container">
                <div className="header__line">
                    <HeaderLogo />
                    <HeaderMenu/>
                </div>
            </div>
        </header>
    )
};

export default Header;