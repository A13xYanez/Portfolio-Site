import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Model from '../../../public/Scene';
import transition from '../global/transitions/Transition';
import { useShuffle } from '../../hooks/useShuffle';
import Image from '../global/images/Image';
import './Landing.css';

const Landing = () => {
    const recentWorkTitleText = useRef();
    useShuffle(recentWorkTitleText);
    
    return (
        <main className='landing-container'>
            <div className="gradient" />
            <Canvas className='planet-canvas'>
                <OrbitControls enableZoom={false} enableRotate={false} autoRotate={true} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <EffectComposer>
                    <Bloom intensity={1.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
                </EffectComposer>
            </Canvas>
            <div className="recent-project-wrap">
                <h2 ref={recentWorkTitleText}>Recent Work</h2>
                <div className="recent-project-img-container">
                    <img src="recent-work.png" className="recent-project-img" />
                    <h3>Artisan Allure Fashions</h3>
                </div>
            </div>
        </main>
    );
};

export default transition(Landing);