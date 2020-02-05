import React, { useState, useCallback } from "react";
import Select from 'react-select';
import { useSelector, useDispatch } from "react-redux";
import {fetchRouteRequest, cancelOrder} from "../../redux/actions";

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

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [addressOne, setAddressOne] = useState(null);
    const [addressTwo, setAddressTwo] = useState(null);
    const [order, setOrder] = useState(false);
    const options = state.address.map(option => ({value: option, label: option}));
    const availableOptions = options.filter(
            option => ![addressOne, addressTwo].includes(option.label)
    );

    const handleSubmit = useCallback(e => {
            e.preventDefault();
            dispatch(fetchRouteRequest({
                address1: addressOne,
                address2: addressTwo
            }));
            setOrder(true);
        }, [addressOne, addressTwo, dispatch]);

    const handleAddressOne = useCallback(e => {
        const value = e ? e.value : null;
        setAddressOne(value);
    }, [setAddressOne]);

    const handleAddressTwo = useCallback( e => {
        const value = e ? e.value: null;
        setAddressTwo(value);
    }, [setAddressTwo]);

    const handleCancelOrder = useCallback(() => {
        setOrder(false);
        dispatch(cancelOrder({
            status: false,
            coordinates: null
        }));
        setAddressOne(null);
        setAddressTwo(null);
    }, [setOrder, dispatch]);

    return (
            <>
                {order ? (
                    <>
                        <h1>Заказ размещён</h1>
                        <p className="panel__subtext">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
                        <button className="form__btn" onClick={handleCancelOrder} >Сделать новый заказ</button>
                    </>
                    ) : (
                    <form action="" method="" onSubmit={handleSubmit}>
                        <div className="address__group">
                            <Select
                                    className="address__input"
                                    options={availableOptions}
                                    styles={customStyle}
                                    placeholder="Откуда"
                                    onChange={handleAddressOne}
                                    isClearable
                                    isSearchable
                                    noOptionsMessage={() => 'Введите корректный адрес'}
                            />
                            <Select
                                    className="address__input"
                                    options={availableOptions}
                                    styles={customStyle}
                                    placeholder="Куда"
                                    onChange={handleAddressTwo}
                                    isClearable
                                    isSearchable
                                    noOptionsMessage={() => 'Введите корректный адрес'}
                            />
                        </div>
                        <input type="submit" className="form__btn" value="Вызвать такси" disabled={!addressOne || !addressTwo}/>
                    </form>
                )}
            </>
    )
};