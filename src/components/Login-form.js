import React, { useContext } from 'react'
import {Context} from '../App'

const LoginForm = () => {
    const context = useContext(Context);
    const submit = e => {
        e.preventDefault();
        const form = e.target;
        const login = form.elements.login.value;
        const password = form.elements.password.value;
        context.login(login, password);
    };
    return (
        <>
            <form action="" method="" onSubmit={submit} className="login__form" id="loginForm">
                <h1 className="form__title">Войти</h1>
                <div className="form__subtitle">
                    Новый пользователь? <a href="#" className="form__link">Зарегистрируйтесь</a>
                </div>
                <div className="input__group">
                    <label htmlFor="login" className="input__label">Имя пользователя<sup>*</sup></label>
                    <input type="text" name="login" className="form__input" required />
                </div>
                <div className="input__group">
                    <label htmlFor="password" className="input__label">Пароль<sup>*</sup></label>
                    <input type="password" name="password" className="form__input" required />
                </div>
                <input type="submit" value="Войти" className="form__btn" />
            </form>
        </>
    )
};


export default LoginForm;