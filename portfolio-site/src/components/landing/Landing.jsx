import React from 'react';
import './Landing.css';

import { IoMenu } from "react-icons/io5";

const Landing = () => {
    return (
        <main className='landing-container'>
            <div className="landing-content">
                <div className="menu-controls">
                    <IoMenu />
                </div>
                <div className="logo">

                </div>
                <div className="name">
                    <h2>Alex</h2>
                    <h2>Yanez</h2>
                </div>
                <div className="roles">
                    <h2>Software Engineer</h2>
                    <h2>Full-Stack Developer</h2>
                </div>
            </div>
        </main>
    );
};

export default Landing;