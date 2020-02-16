import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import McLogo from "./McIcon";
import Header from "../Shared/Header/Header";
import { fetchProfileRequest } from "../../modules/Profile/actions";
import { fetchAddressRequest } from "../../modules/Map/actions";
import { useSelector, useDispatch } from "react-redux";
import { DatePicker } from "@material-ui/pickers";
import { Button, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import {numberValidator, cardNameValidator, cvcValidator} from "./validate";
import * as yup from 'yup';

const ProfileSchema = yup.object().shape({
    cardNumber: yup.string()
            .length(19, 'В номере карты должно быть 16 цифр')
            .required('Это обязательное поле'),
    cardName: yup.string()
            .max(22, 'Не более 22 символов')
            .required('Это обязательное поле'),
    cvc: yup.string()
            .length(3, 'Должно быть 3 цифры')
            .required('Это обязательное поле')
});

const Profile = () => {
    const { register, handleSubmit, errors, control } = useForm({mode: 'onChange', validationSchema: ProfileSchema});
    const history = useHistory();
    const state = useSelector(state => state);
    const profile = state.profile;
    const dispatch = useDispatch();
    const [info, updateInfo] = useState(false);

    const values = {
        cardNumber: profile ? profile.cardNumber : '',
        expiryDate: profile ? profile.expiryDate : new Date(),
        cardName: profile ? profile.cardName : '',
        cvc: profile ? profile.cvc : ''
    };

    const handleClick = () => {
        history.push('/map')
    };

    const onSubmit = (data) => {
        dispatch(fetchProfileRequest(data));
        dispatch(fetchAddressRequest());
        updateInfo(true);
    };

    const handleCardNumberInput = ({target}) => {
        target.value = numberValidator(target.value);
    };

    const handleCardNameInput = ({target}) => {
        target.value = cardNameValidator(target.value);
    };

    const handleCvcInput = ({target}) => {
        target.value = cvcValidator(target.value);
    };

    return (
        <>
            <Header />
            <div className="bg-container">
                <div className="container">
                    <div className="profile__content">
                        <form action="" method="" onSubmit={handleSubmit(onSubmit)} className="form form--profile">
                            <h1 className="form__title">Профиль</h1>
                            <div className="form__subtitle">Способ оплаты</div>
                            {info ? <>
                                <div className="form__subtitle">Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="form__btn"
                                    onClick={handleClick}>
                                    Перейти на карту
                                </Button>
                                </> : <>
                                <div className="form__panels">
                                    <div className="form__panel">
                                        <div className="input__group">
                                            <TextField
                                                type="text"
                                                label="Номер карты:"
                                                placeholder="Номер карты:"
                                                name="cardNumber"
                                                className="form__input"
                                                inputRef={register()}
                                                defaultValue={values.cardNumber}
                                                onInput={handleCardNumberInput}
                                                helperText={errors.cardNumber && errors.cardNumber.message}
                                                error={!!errors.cardNumber}
                                                required/>
                                        </div>
                                        <div className="input__group">
                                            <Controller as={DatePicker}
                                                label="Срок действия:"
                                                name="expiryDate"
                                                className="form__input"
                                                views={["year", "month"]}
                                                control={control}
                                                inputRef={register({ required: true })}
                                                defaultValue={values.expiryDate}
                                                format={"MM/yy"}
                                                required/>
                                        </div>
                                        <McLogo/>
                                    </div>
                                    <div className="form__panel">
                                        <div className="input__group">
                                            <TextField
                                                label="Имя владельца:"
                                                placeholder="Имя владельца:"
                                                name="cardName"
                                                className="form__input"
                                                inputRef={register}
                                                defaultValue={values.cardName}
                                                helperText={errors.cardName && errors.cardName.message}
                                                error={!!errors.cardName}
                                                onInput={handleCardNameInput}
                                                id="cardName"
                                                required/>
                                        </div>
                                        <div className="input__group">
                                            <TextField
                                                label="CVC:"
                                                placeholder="CVC:"
                                                name="cvc"
                                                inputRef={register}
                                                defaultValue={values.cvc}
                                                helperText={errors.cvc && errors.cvc.message}
                                                error={!!errors.cvc}
                                                onInput={handleCvcInput}
                                                className="form__input"
                                                id="cvc"
                                                required/>
                                        </div>
                                    </div>
                                </div>
                                {state.pending ?
                                    <div className="pending"><div className="pending__inner"></div></div>
                                        :
                                        <Button
                                            className="form__btn"
                                            variant="contained" color="primary"
                                            type="submit"
                                            data-testid="submit-button">
                                            Сохранить
                                        </Button>}
                                </>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Profile;