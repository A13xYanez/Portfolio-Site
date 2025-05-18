import React, { useRef, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Model from '../../../public/Scene';
import transition from '../global/transitions/Transition';
import { useShuffle } from '../../hooks/useShuffle';
import { usePreloader } from '../global/preloader/LoaderContext';
import Image from '../global/images/Image';
import './Landing.css';

import Spline from '@splinetool/react-spline';

const Landing = () => {
    const { isPreloading } = usePreloader();
    const recentWorkTitleText = useRef();
    useShuffle(recentWorkTitleText);
    
    return (
        <main className='landing-container'>
            <Spline className='circut' scene="https://prod.spline.design/5jfbMbZeWCk72OLT/scene.splinecode" />
            <div className="recent-project-wrap">
                <h2 ref={recentWorkTitleText}>Recent Work</h2>
                <Link to='/projects'>
                    <div className="recent-project-img-container">
                        <Image path="recent-work-thumbnail.png?updatedAt=1746992128299" className="recent-project-img" data-cursor-label="Show Work" />
                        <h3>Portfolio</h3>
                    </div>
                </Link>
            </div>
        </main>
    );
};

export default transition(Landing);