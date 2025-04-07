import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <div className="logo">
                <img src="/logo.png" alt="" />
            </div>
            <div className="name">
                <h2>Alex Yanez</h2>
            </div>
            <div className="dark-mode-settings">
                <div className="mode-settings">
                    <p>Dark Mode</p>
                    <div className="led-bulb-active">
                        <div />
                    </div>
                </div>
            </div>
            <div className="light-mode-settings">
                <div className="mode-settings">
                    <p>Light Mode</p>
                    <div className="led-bulb-inactive">
                        <div />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;