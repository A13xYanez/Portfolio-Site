import React from 'react';
import { motion } from 'framer-motion';
import './Landing.css';

import { IoMenu } from "react-icons/io5";

// TODO: use framer to make opacity effect for planet
//TODO: Make menu open upwards when clicked
//TODO: Make logo open socials when clicked
//TODO: Make text effect when text is hovered
//TODO: add purple backgrond gradient texture
const Landing = () => {
    return (
        <main className='landing-container'>
            <div className="landing-content">
                <div className="menu-controls">
                    <IoMenu className='menu-icon' />
                </div>
                <div className="logo">
                    <img src="/H4.png" alt="" />
                </div>
                <div className="name">
                    <h2>Alex Yanez</h2>
                </div>
                <div className="roles">
                    <h2>Software Engineer</h2>
                    <h2>Full-Stack Developer</h2>
                </div>
                <div className="gradient"></div>
                <spline-viewer url="https://prod.spline.design/n9t6fe6Uvtkn1ZE7/scene.splinecode"></spline-viewer>
                <div className="block"></div>
            </div>
        </main>
    );
};

export default Landing;