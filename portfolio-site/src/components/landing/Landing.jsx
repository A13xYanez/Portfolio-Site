import React, { useRef, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Model from '../../../public/Scene';
import transition from '../global/transitions/Transition';
import { useShuffle } from '../../hooks/useShuffle';
import Image from '../global/images/Image';
import { motion } from 'framer-motion';
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
                <Link to='/projects'>
                    <div className="recent-project-img-container">
                        <Image path="recent-work-thumbnail.png?updatedAt=1746992128299" className="recent-project-img" data-cursor-label="Show Work" />
                        <h3>Portfolio</h3>
                    </div>
                </Link>
            </div>
            <motion.div className="cursor-options"
                initial={{ bottom: -28 }}
                whileHover={{ bottom: 0 }}
            >
                <div className="select-cursor">
                    <div className="led-bulb-selected">
                        <div />
                    </div>
                    <p>Default Cursor</p>
                </div>
                <div className="select-cursor">
                    <div className="led-bulb-inactive">
                        <div />
                    </div>
                    <p>Custom Cursor</p>
                </div>
            </motion.div>
        </main>
    );
};

export default transition(Landing);