import React from 'react';

const Header =({setPage}) => {
    return (
        <div>
            <button name="profile" onClick={setPage}>Profile</button>
            <button name="map" onClick={setPage}>Map</button>
            <button name="login" onClick={setPage}>Login</button>
            <button name="signup" onClick={setPage}>Signup</button>
        </div>
    )
};

export default Header;