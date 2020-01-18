import React from 'react';

const LoginForm = ({redirect}) => {
    return (
        <>
            <h1>Login</h1>
            <form action="" method="" onSubmit={redirect}>
                <label htmlFor="login">Логин:</label>
                <input type="text" name="login"/>
                <br/>
                <label htmlFor="password">Пароль:</label>
                <input type="password" name="password"/>
                <br/>
                <input type="submit" value="Отправить"/>
            </form>
        </>
    )
};

export default LoginForm;