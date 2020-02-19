import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { OrderForm } from './OrderForm'
import Button from "@material-ui/core/Button";

export const OrderPanel = () => {

    const history = useHistory();
    const profile = useSelector(state => state.profile);

    const handleClick = () => {
        history.push('/profile')
    };

    return (
        <div className="container">
            <div className="map__panel">
                {profile.status ? <OrderForm /> :
                    <>
                        <h1>Заполните платежные данные</h1>
                        <p className="panel__subtext">Укажите информацию о банковской карте, чтобы сделать заказ.</p>
                        <Button
                            variant="contained"
                            color="primary"
                            className="form__btn"
                            onClick={handleClick}>
                            Перейти в профиль
                        </Button>
                    </> }
            </div>
        </div>
    )
};