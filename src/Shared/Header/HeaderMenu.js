import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import { logoutAction } from "../../modules/Auth/actions";
import { useDispatch } from "react-redux";

const HeaderMenu = () => {
    const dispatch = useDispatch();
    const handleClick = e => {
        e.preventDefault();
        dispatch(logoutAction())
    };

    return (
        <ul className="header__menu">
            <li><Button component={Link} to="/map">Карта</Button></li>
            <li><Button component={Link} to="/profile">Профиль</Button></li>
            <li><Button component={Link} to="/login" onClick={handleClick}>Выйти</Button></li>
        </ul>
    )
};

export default HeaderMenu;