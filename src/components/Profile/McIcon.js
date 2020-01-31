import React from 'react';
import McIcon from '../../img/mc_symbol.svg';

const McLogo = () => {
    return (
        <div className="mc-logo">
            <img src={McIcon} width="45" alt="logo" className="logo__icon"/>
        </div>
    )
};

export default McLogo;