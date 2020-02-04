import React, { useState, useCallback,useEffect } from "react";
import Select from 'react-select';
import { useSelector, useDispatch } from "react-redux";
import {fetchRouteRequest, cancelOrder} from "../../redux/actions";

export const OrderForm = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [addressOne, setAddressOne] = useState(null);
    const [addressTwo, setAddressTwo] = useState(null);
    const [order, setOrder] = useState(false);
    const [options, setOptions] = useState(null);

    useEffect(()=>{
        setOptions(getOptions());
    },[]);

    const getOptions = () => {
        let options = state.address.map(option => ({value: option, label: option}));
        let availableOptions = options.filter(
                option => ![addressOne, addressTwo].includes(option.label)
        );

        return availableOptions;
    };
    
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
//        dispatch(fetchAddressRequest());
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
                                    options={options}
                                    placeholder="Откуда"
                                    onChange={handleAddressOne}
                                    isClearable
                                    isSearchable
                                    noOptionsMessage={() => 'Введите корректный адрес'}
                            />
                            <Select
                                    className="address__input"
                                    options={options}
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