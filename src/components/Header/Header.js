import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import HeaderLogo from './HeaderLogo'
import HeaderButton from './HeaderButton'
import {Context} from '../../App'

const pages = [
    { value: 'map', text: 'Карта', id: 0 },
    { value: 'profile', text: 'Профиль', id: 1 }
];

const Header =({setPage}) => {
    const context = useContext(Context);
    const handleClick = e => {
        setPage(e.target.name)
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__line">
                    <HeaderLogo />
                    <div className="header__menu">
                        {pages.map(page =>
                            <HeaderButton
                                key={page.id}
                                name={page.value}
                                text={page.text}
                                handleClick={handleClick}
                                testid={page.id}
                            />)}
                        <HeaderButton handleClick={context.logout} text={'Выйти'} />
                    </div>
                </div>
            </div>
        </header>
    )
};

Header.propTypes = {
    setPage: PropTypes.func.isRequired
};

export default Header;