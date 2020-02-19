import React, {useEffect} from 'react';
import { Link, useHistory } from "react-router-dom";
import { fetchAuthRequest } from "../../modules/Auth/actions";
import { useSelector, useDispatch} from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import {normalizeInput} from "./normalize";

import * as yup from "yup";

const RegisterSchema = yup.object().shape({
    email: yup.string()
            .email('Введите корректный адрес')
            .required('Это обязательное поле'),
    name: yup.string()
            .max(30, 'Не длиннее 30 символов')
            .required('Это обязательное поле'),
    surname: yup.string()
            .max(30, 'Не длиннее 30 символов')
            .required('Это обязательное поле'),
    password: yup.string()
            .required('Это обязательное поле')
});


const SignupForm = () => {
    const history = useHistory();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const {register, handleSubmit, errors} = useForm({mode: 'onChange', validationSchema: RegisterSchema});

    const onSubmit = (data) => {
        data.path = 'register';
        dispatch(fetchAuthRequest(data))
    };

    const handleInput = ({target}) => {
        target.value = normalizeInput(target.value);
    };

    useEffect(() => {
        if(auth.isLoggedIn) {
            history.push('/map');
        }
    },[auth.isLoggedIn, history]);

    return (
            <form action="" method="" onSubmit={handleSubmit(onSubmit)} className="form" id="loginForm" data-testid="LoginForm">
                <h1 className="form__title">Регистрация</h1>
                <div className="form__subtitle">
                    Уже зарегистрированы? <Link to="/login">Войти</Link>
                </div>
                <div className="input__group">
                    <TextField
                        label="Адрес электронной почты"
                        placeholder="Адрес электронной почты"
                        type="email"
                        inputRef={register}
                        helperText={(auth.errors && 'Такой пользователь уже существует') || (errors.email && errors.email.message)}
                        error={!!errors.email || !!auth.errors}
                        name="email"
                        className="form__input"
                        data-testid="email-field"
                    />
                </div>
                <div className="input__row">
                    <div className="input__block">
                        <TextField
                            label="Имя"
                            placeholder="Имя"
                            inputRef={register}
                            helperText={errors.name && errors.name.message}
                            error={!!errors.name}
                            onInput={handleInput}
                            type="text"
                            name="name"
                            className="form__input"
                        />
                    </div>
                    <div className="input__block">
                        <TextField
                            label="Фамилия"
                            placeholder="Фамилия"
                            inputRef={register}
                            helperText={errors.surname && errors.surname.message}
                            error={!!errors.surname}
                            onInput={handleInput}
                            type="text"
                            name="surname"
                            className="form__input"
                         />
                    </div>
                </div>
                <div className="input__group">
                    <TextField
                        label="Пароль"
                        placeholder="Пароль"
                        inputRef={register}
                        helperText={errors.password && errors.password.message}
                        error={!!errors.password}
                        type="password"
                        name="password"
                        className="form__input"
                    />
                </div>
                {auth.pending ?
                    <div className="pending"><div className="pending__inner"></div></div>
                    :
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        data-testid="submit-button"
                        className="form__btn">
                        Зарегистрироваться
                    </Button>}
            </form>
    )
};


export default SignupForm;