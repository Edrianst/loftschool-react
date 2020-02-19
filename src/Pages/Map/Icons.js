import React from 'react'
import ToIcon from '../../img/to.png'
import FromIcon from '../../img/from.png'

export const IconTo = () => {
    return (
            <div className="map__icon to">
                <img src={ToIcon} alt="logo" className="icon__pic"/>
            </div>
    )
};

export const IconFrom = () => {
    return (
            <div className="map__icon from">
                <img src={FromIcon} alt="logo" className="icon__pic"/>
            </div>
    )
};
