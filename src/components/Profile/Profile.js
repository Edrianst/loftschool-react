import React, { useState } from 'react';
import McLogo from "./McIcon";
import Header from "../Shared/Header/Header";
import {fetchProfileRequest} from "../../redux/actions";
import {useSelector, useDispatch} from "react-redux";

const Profile = () => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const [inputData, setData] = useState({cardNumber: profile.cardNumber, expiryDate: profile.expiryDate, cardName: profile.cardName, cvc: profile.cvc});
    const handleChange = ({ target }) => {setData({...inputData, [target.name]: target.value})};
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchProfileRequest({
            cardNumber: inputData.cardNumber,
            expiryDate: inputData.expiryDate,
            cardName: inputData.cardName.toUpperCase(),
            cvc: inputData.cvc,
            token: profile.token
        }));
    };
    return (
        <>
            <Header />
            <div className="bg-container">
                <div className="container">
                    <div className="profile__content">
                        <form action="" method="" onSubmit={handleSubmit} className="form form--profile">
                            <h1 className="form__title">Профиль</h1>
                            <div className="form__subtitle">Способ оплаты</div>
                            <div className="form__panels">
                                <div className="form__panel">
                                    <div className="input__group">
                                        <label htmlFor="cardNumber" className="input__label">Номер карты:</label>
                                        <input type="text" name="cardNumber" className="form__input" value={inputData.cardNumber} onChange={handleChange} required/>
                                    </div>
                                    <div className="input__group">
                                        <label htmlFor="expirуDate" className="input__label">Срок действия:</label>
                                        <input type="text" name="expiryDate" className="form__input" value={inputData.expiryDate} onChange={handleChange} required/>
                                    </div>
                                    <McLogo />
                                </div>
                                <div className="form__panel">
                                    <div className="input__group">
                                        <label htmlFor="cardName" className="input__label">Имя владельца:</label>
                                        <input type="text" name="cardName" className="form__input" value={inputData.cardName} onChange={handleChange} required/>
                                    </div>
                                    <div className="input__group">
                                        <label htmlFor="cvc" className="input__label">CVC:</label>
                                        <input type="text" name="cvc" value={inputData.cvc} onChange={handleChange} className="form__input" required/>
                                    </div>
                                </div>
                            </div>
                            <input type="submit" value="Сохранить" data-testid="submit-button" className="form__btn"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Profile;