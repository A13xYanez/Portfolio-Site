import React, { useEffect, useRef } from 'react';
import transition from '../global/transitions/Transition';
import { usePreloader } from '../global/preloader/LoaderContext';
import { useShuffle } from '../../hooks/useShuffle';
import './Landing.css';

const Landing = () => {
    const { isPreloading } = usePreloader();
    const ring = useRef(null);
    useEffect(() => {
        const ringTarget = ring.current;
        ringTarget.style.setProperty("--rotateX", `0deg`);
        ringTarget.style.setProperty("--rotateY", `0deg`);
        const maxRotation = 45;

        document.addEventListener("mousemove", (e) => {
            rotateElement(e, ringTarget);
        });
        document.addEventListener("touchmove", (e) => {
            mobileRotateElement(e, ringTarget);
        });

        const rotateElement = (event, element) => {
            const x = event.clientX;
            const y = event.clientY;

            const middleX = window.innerWidth / 2;
            const middleY = window.innerHeight / 2;

            const offsetX = ((x - middleX) / middleX) * maxRotation;
            const offsetY = ((y - middleY) / middleY) * maxRotation;

            element.style.setProperty("--rotateX", `${-1 * offsetY}deg`);
            element.style.setProperty("--rotateY", `${offsetX}deg`);
        };
        const mobileRotateElement = (event, element) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0];

                const middleX = window.innerWidth / 2;
                const middleY = window.innerHeight / 2;

                const offsetX = ((touch.clientX - middleX) / middleX) * maxRotation;
                const offsetY = ((touch.clientY - middleY) / middleY) * maxRotation;

                 element.style.setProperty("--rotateX", `${-1 * offsetY}deg`);
                element.style.setProperty("--rotateY", `${offsetX}deg`);
            }
        };
    }, []);

    const roleTop = useRef();
    const roleBottom = useRef();
    useShuffle(roleTop);
    useShuffle(roleBottom);
    
    return (
        <main className='landing-container'>
            <div className="roles">
                <h2 ref={roleTop}>Software Engineer</h2>
                <h2 ref={roleBottom}>Full-Stack Developer</h2>
            </div>
            <div className="gradient"
                style={{animation: `fadeIn 2.5s ease ${isPreloading ? '4.5s' : '0s'} forwards`}}
            />
            <div className='landing-ring' ref={ring} 
                style={{animation: `expandRing 2s ease ${isPreloading ? '4.5s' : '0s'} forwards`}}
            />
        </main>
    );
};

export default transition(Landing);