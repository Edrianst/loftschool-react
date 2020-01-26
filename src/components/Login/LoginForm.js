import React, { useState, useContext } from 'react'
import { Context } from '../../App'

const LoginForm = () => {
    const context = useContext(Context);
    const [ inputData, setData ] = useState({ login: '', password: ''});
    const handleChange = ({ target }) => { setData({ [target.name]: target.value }) };
    const handleSubmit = e => {
        e.preventDefault();
        context.login(inputData.login, inputData.password);
    };
    return (
        <form action="" method="" onSubmit={handleSubmit} className="login__form" id="loginForm">
            <h1 className="form__title">Войти</h1>
            <div className="form__subtitle">
                Новый пользователь? <a href="#" className="form__link">Зарегистрируйтесь</a>
            </div>
            <div className="input__group">
                <label htmlFor="login" className="input__label">Имя пользователя<sup>*</sup></label>
                <input type="text" name="login" className="form__input" data-testid="login-field" onChange={handleChange} required />
            </div>
            <div className="input__group">
                <label htmlFor="password" className="input__label">Пароль<sup>*</sup></label>
                <input type="password" name="password" className="form__input" data-testid="password-field" onChange={handleChange} required />
            </div>
            <input type="submit" value="Войти" data-testid="submit-button" className="form__btn" />
        </form>
    )
};


export default LoginForm;