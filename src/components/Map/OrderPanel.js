import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { OrderForm } from './OrderForm'

export const OrderPanel = () => {

    const history = useHistory();
    const profile = useSelector(state => state.profile);

    const handleClick = () => {
        history.push('/profile')
    };

    return (
        <div className="container">
            <div className="map__panel">
                {profile ? <OrderForm /> :
                    <>
                        <h1>Заполните платежные данные</h1>
                        <p className="panel__subtext">Укажите информацию о банковской карте, чтобы сделать заказ.</p>
                        <button className="form__btn" onClick={handleClick}>Перейти в профиль</button>
                    </> }
            </div>
        </div>
    )
};