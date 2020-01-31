import React from 'react';
import { Link } from 'react-router-dom';
import {logoutAction} from "../../redux/actions";
import { connect } from 'react-redux';

const HeaderMenu = ({logoutAction}) => {
    const handleClick = e => {
        e.preventDefault();
        logoutAction();
    };

    return (
        <ul className="header__menu">
            <li className="menu__item"><Link to="/map" >Карта</Link></li>
            <li className="menu__item"><Link to="/profile" >Профиль</Link></li>
            <li className="menu__item"><a href="/" onClick={handleClick} >Выйти</a></li>
        </ul>
    )
};

const mapDispatchToProps = {logoutAction};

export default connect(null, mapDispatchToProps)(HeaderMenu);