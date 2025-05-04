import React, { Suspense, useState, useEffect } from 'react';
import transition from '../global/transitions/Transition';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import './Landing.css';

const Landing = () => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setReady(true), 1000); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className='landing-container'>
            <div className="roles">
                <h2>Software Engineer</h2>
                <h2>Full-Stack Developer</h2>
            </div>
            <div className="gradient" />
            <Suspense>
                {ready &&
                    <Spline
                        className='planet'
                        scene="https://prod.spline.design/Zrxlwv5n5Gc0cpJy/scene.splinecode" 
                    />
                }
            </Suspense>
            <div className="block" />
        </main>
    );
};

export default transition(Landing);