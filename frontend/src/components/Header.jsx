import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <div className="brand">
                    <div className="brand-icon">PP</div>
                    <span>Prasanth PM</span>
                </div>
                <Nav />
            </div>
        </header>
    );
};

export default Header;