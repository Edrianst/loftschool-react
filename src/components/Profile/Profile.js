import React, { useState } from 'react';
import McLogo from "./McIcon";
import {fetchProfileRequest} from "../../redux/actions";
import { connect } from 'react-redux';
import {drawText} from "../../shared/pending";

const Profile = ({token, fetchProfileRequest}) => {
    const [inputData, setData] = useState({cardNumber: '', expiryDate: '', cardName: '', cvc: ''});
    const handleChange = ({ target }) => {setData({...inputData, [target.name]: target.value})};
    const handleSubmit = e => {
        e.preventDefault();
        fetchProfileRequest({
            cardNumber: inputData.cardNumber,
            expiryDate: inputData.expiryDate,
            cardName: inputData.cardName,
            cvc: inputData.cvc,
            token: token
        });
    };
    return (
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
    )
};

const mapStateToProps = state => ({token: state.profile.token});
const mapDispatchToProps = {fetchProfileRequest};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);