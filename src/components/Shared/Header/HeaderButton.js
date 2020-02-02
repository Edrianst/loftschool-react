import React from 'react'
import PropTypes from 'prop-types'

const HeaderButton = ({handleClick, text, name, testid}) => {
    return (
        <button name={name} onClick={handleClick} data-testid={testid} className="menu__item">{text}</button>
    )
};

HeaderButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string,
    testid: PropTypes.number
};

export default HeaderButton;