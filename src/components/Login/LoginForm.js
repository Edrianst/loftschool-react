import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {fetchLoginRequest} from "../../redux/actions";
import { connect } from 'react-redux';
import { drawText } from "../../shared/pending";

const LoginForm = ({ state, fetchLoginRequest }) => {
    const [ inputData, setData ] = useState({email: '', password: ''});
    const handleChange = ({target}) => {setData({ ...inputData, [target.name]: target.value})};
    const handleSubmit = e => {
        e.preventDefault();
        fetchLoginRequest({
            email: inputData.email,
            password: inputData.password
        });
    };
    return (
        <form action="" method="" onSubmit={handleSubmit} className="form" id="loginForm" data-testid="LoginForm">
            <h1 className="form__title">Войти</h1>
            <div className="form__subtitle">
                Новый пользователь? <Link to="/signup">Зарегистрируйтесь</Link>
            </div>
            <div className="input__group">
                <label htmlFor="email" className="input__label">Имя пользователя<sup>*</sup></label>
                <input type="text" name="email" className="form__input" value={inputData.email} data-testid="login-field"
                       onChange={handleChange} required/>
            </div>
            <div className="input__group">
                <label htmlFor="password" className="input__label">Пароль<sup>*</sup></label>
                <input type="password" name="password" className="form__input" value={inputData.password} data-testid="password-field"
                       onChange={handleChange} required/>
            </div>
            <input type="submit" value="Войти" data-testid="submit-button" className="form__btn"/>
            <div className="pending"></div>
            {state.pending ? drawText(['Подождите...', 'Загрузка...']) : null}
        </form>
    )
};

const mapStateToProps = state => ({ state });
const mapDispatchToProps = {fetchLoginRequest};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);