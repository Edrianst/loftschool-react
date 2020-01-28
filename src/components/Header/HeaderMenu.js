import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { Context } from '../../HOCs/Auth'


const HeaderMenu = () => {
    const {logout} = useContext(Context);
    const handleClick = e => {
        e.preventDefault();
        logout();
    };
    return (
        <ul className="header__menu">
            <li className="menu__item"><NavLink to="/map" >Карта</NavLink></li>
            <li className="menu__item"><NavLink to="/profile" >Профиль</NavLink></li>
            <li className="menu__item"><a href="/" onClick={handleClick}>Выйти</a></li>
        </ul>
    )
};

export default HeaderMenu;