import React, { useEffect, useRef } from 'react';
import transition from '../global/transitions/Transition';
import './Landing.css';

const Landing = () => {
    const ring = useRef(null);
    useEffect(() => {
        const ringTarget = ring.current;
        ringTarget.style.setProperty("--rotateX", `0deg`);
        ringTarget.style.setProperty("--rotateY", `0deg`);
        const maxRotation = 45;

        document.addEventListener("mousemove", (e) => {
            rotateElement(e, ringTarget);
        });

        function rotateElement(event, element) {
            const x = event.clientX;
            const y = event.clientY;

            const middleX = window.innerWidth / 2;
            const middleY = window.innerHeight / 2;

            const offsetX = ((x - middleX) / middleX) * maxRotation;
            const offsetY = ((y - middleY) / middleY) * maxRotation;

            element.style.setProperty("--rotateX", `${-1 * offsetY}deg`);
            element.style.setProperty("--rotateY", `${offsetX}deg`);
        };
    }, []);

    return (
        <main className='landing-container'>
            <div className="roles">
                <h2>Software Engineer</h2>
                <h2>Full-Stack Developer</h2>
            </div>
            <div className="gradient" />
            <div className='landing-ring' ref={ring} />
        </main>
    );
};

export default transition(Landing);