import React, { useState } from "react";
import Select from 'react-select';
import { useSelector, useDispatch } from "react-redux";
import { fetchRouteRequest } from "../../redux/actions";

export const OrderForm = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [addressOne, setAddressOne] = useState(null);
    const [addressTwo, setAddressTwo] = useState(null);

    const options = state.address.map(option => ({value: option, label: option}));
    const availableOptions = options.filter(
            option => ![addressOne, addressTwo].includes(option.label)
    );

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchRouteRequest({
            address1: addressOne,
            address2: addressTwo
        }))
    };

    const handleAddressOne = e => {
        if(e === null) {
            setAddressOne(null)
        } else {
            setAddressOne(e.value);
        }
    };

    const handleAddressTwo = e => {
        if(e === null) {
            setAddressTwo(null)
        } else {
            setAddressTwo(e.value);
        }
    };

    return (
            <>
                <form action="" method="" onSubmit={handleSubmit}>
                    <div className="address__group">
                        <Select
                                className="address__input"
                                options={availableOptions}
                                placeholder="Откуда"
                                onChange={handleAddressOne}
                                isClearable
                                isSearchable
                                noOptionsMessage={() => 'Введите корректный адрес'}
                        />
                        <Select
                                className="address__input"
                                options={availableOptions}
                                placeholder="Куда"
                                onChange={handleAddressTwo}
                                isClearable
                                isSearchable
                                noOptionsMessage={() => 'Введите корректный адрес'}
                        />
                    </div>
                    <input type="submit" className="form__btn" value="Вызвать такси" disabled={!addressOne || !addressTwo}/>
                </form>
            </>
    )
};