import React from 'react';
import './style.scss';

const Header = ({ name }) => {
    return(
        <div className="header-container">
            <h1>{name || ''} News App</h1>
        </div>
    );
};

export default Header;