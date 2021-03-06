import React, {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { fetchAuthRequest } from "../../modules/Auth/actions";
import { useSelector, useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const LoginSchema = yup.object().shape({
    email: yup.string().email('Введите корректный адрес').required('Это обязательное поле'),
    password: yup.string().required('Это обязательное поле')
});

const LoginForm = () => {
    const { register, handleSubmit, errors } = useForm({mode: 'onChange', validationSchema: LoginSchema});
    const auth = useSelector(state => state.auth);
    const history = useHistory();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        data.path = 'auth';
        dispatch(fetchAuthRequest(data))
    };

    useEffect(() => {
        if(auth.isLoggedIn) {
            history.push('/map');
        }
    },[auth.isLoggedIn, history]);

    return (
        <form action="" method="" onSubmit={handleSubmit(onSubmit)} className="form" id="loginForm" data-testid="LoginForm">
            <h1 className="form__title">Войти</h1>
            <div className="form__subtitle">
                Новый пользователь? <Link to="/signup">Зарегистрируйтесь</Link>
            </div>
            <div className="input__group">
                <TextField
                    type="email"
                    label="Имя пользователя"
                    placeholder="Имя пользователя"
                    name="email"
                    inputRef={register}
                    className="form__input"
                    helperText={(auth.errors && 'Неверный логин') || (errors.email && errors.email.message)}
                    data-testid="login-field"
                    error={!!errors.email || !!auth.errors}
                    />
            </div>
            <div className="input__group">
                <TextField
                    type="password"
                    label="Пароль"
                    placeholder="Пароль"
                    name="password"
                    inputRef={register}
                    className="form__input"
                    helperText={(auth.errors && 'Неверный пароль') || (errors.password && errors.password.message)}
                    data-testid="password-field"
                    error={!!errors.password || !!auth.errors}
                    />
            </div>
            {auth.pending ? <div className="pending"><div className="pending__inner"></div></div> : <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    data-testid="authButton"
                    className="form__btn">
                Войти
            </Button>}
        </form>
    )
};

export default LoginForm;