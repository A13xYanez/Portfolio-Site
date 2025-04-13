import React from 'react';
import transition from '../global/transitions/Transition';
import './Landing.css';

const Landing = () => {
    return (
        <main className='landing-container'>
            <div className="roles">
                <h2>Software Engineer</h2>
                <h2>Full-Stack Developer</h2>
            </div>
            <div className="gradient"></div>
                <spline-viewer className="planet" url="https://prod.spline.design/Zrxlwv5n5Gc0cpJy/scene.splinecode"></spline-viewer>
            <div className="block"></div>
        </main>
    );
};

export default transition(Landing);