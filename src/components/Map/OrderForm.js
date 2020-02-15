import React, { useState, useCallback } from "react";
import Select from 'react-select';
import { useSelector, useDispatch } from "react-redux";
import { fetchRouteRequest, makeOrder, cancelOrder } from "../../modules/Map/actions";
import { Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import {IconTo, IconFrom} from "./Icons";

const customStyle = {
    control: (provided) => ({
        ...provided,
        display: 'flex',
        border: 'none',
        borderRadius: 0,
        borderBottom: '1px solid',
    })
};

export const OrderForm = () => {
    const { register, handleSubmit, control } = useForm();
    const [addressOne, setAddressOne] = useState(null);
    const [addressTwo, setAddressTwo] = useState(null);
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const options = state.address.map(option => ({value: option, label: option}));

    const availableOptions = options.filter(option => ![addressOne, addressTwo].includes(option.label)
    );

    const onSubmit = (data) => {
        dispatch(fetchRouteRequest({
            address1: data.address1.value,
            address2: data.address2.value
        }));
        dispatch(makeOrder());
    };

    const handleSelectOne = ([selected]) => {
        const value = selected ? selected.value : null;
        setAddressOne(value);
        return {value: selected}
    };

    const handleSelectTwo = ([selected]) => {
        const value = selected ? selected.value : null;
        setAddressTwo(value);
        return {value: selected}
    };

    const handleOptionMessage = () => 'Введите корректный адрес';

    const handleCancelOrder = useCallback(() => {
        dispatch(cancelOrder({
            status: false,
            coordinates: null
        }));
        setAddressOne(null);
        setAddressTwo(null);
    }, [dispatch]);

    return (
            <>
                {state.order ? (
                    <>
                        <h1>Заказ размещён</h1>
                        <p className="panel__subtext">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
                        <Button
                            variant="contained"
                            color="primary"
                            className="form__btn"
                            onClick={handleCancelOrder}>
                            Сделать новый заказ
                        </Button>
                    </>
                    ) : (
                    <form action="" method="" data-testid="order-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="address__group">
                            <div className="address__select">
                                <IconFrom />
                                <Controller
                                    as={Select}
                                    name="address1"
                                    inputRef={register}
                                    control={control}
                                    className="address__input"
                                    options={availableOptions}
                                    styles={customStyle}
                                    placeholder="Откуда"
                                    isClearable
                                    isSearchable
                                    onChange={handleSelectOne}
                                    noOptionsMessage={handleOptionMessage}
                                />
                            </div>
                            <div className="address__select">
                                <IconTo />
                                <Controller
                                    as={Select}
                                    name="address2"
                                    className="address__input"
                                    inputRef={register}
                                    control={control}
                                    options={availableOptions}
                                    styles={customStyle}
                                    placeholder="Куда"
                                    isClearable
                                    isSearchable
                                    onChange={handleSelectTwo}
                                    noOptionsMessage={handleOptionMessage}
                                />
                            </div>
                        </div>
                        {state.pending ?
                            <div className="pending"><div className="pending__inner"></div></div>
                                : <Button
                                    type="submit"
                                    className="form__btn"
                                    variant="contained"
                                    color="primary"
                                    data-testid="submit"
                                    disabled={!addressOne || !addressTwo}>
                                    Вызвать такси
                                </Button>}
                    </form>
                )}
            </>
    )
};