import React from 'react';

const pages = ['Profile', 'Map', 'Login', 'Signup'];

const Header =({setPage}) => {
    return (
        <div>
            {pages.map(page => <button name={page.toLowerCase()} onClick={setPage}>{page}</button>)}
        </div>
    )
};

export default Header;