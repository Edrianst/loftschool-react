import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import HeaderLogo from './Header-logo'
import {Context} from '../App'

const pages = [
    { value: 'map', text: 'Карта', id: 0 },
    { value: 'profile', text: 'Профиль', id: 1 }
];

const Header =({setPage}) => {
    const context = useContext(Context);
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__line">
                        <HeaderLogo />
                        <div className="header__menu">
                            {pages.map(page => <button key={page.id} onClick={() => setPage(page.value)} className="menu__item">{page.text}</button>)}
                            <button className="menu__item" onClick={context.logout}>Выйти</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};

Header.propTypes = {
    setPage: PropTypes.func.isRequired
};

export default Header;