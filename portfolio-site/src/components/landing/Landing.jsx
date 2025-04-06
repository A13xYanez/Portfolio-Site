import React from 'react';
import './Landing.css';

import { IoMenu } from "react-icons/io5";

const Landing = () => {
    return (
        <main className='landing-container'>
            <div className="landing-content">
                <div className="menu-controls">
                    <IoMenu className='menu-icon' />
                </div>
                <div className="logo">
                    <img src="/logo.png" alt="" />
                </div>
                <div className="name">
                    <h2>Alex Yanez</h2>
                </div>
                <div className="roles">
                    <h2>Software Engineer</h2>
                    <h2>Full-Stack Developer</h2>
                </div>
                    <spline-viewer url="https://prod.spline.design/n9t6fe6Uvtkn1ZE7/scene.splinecode"></spline-viewer>
                    <div className="block"></div>
            </div>
        </main>
    );
};

export default Landing;