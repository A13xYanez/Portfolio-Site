import React, { useEffect, useRef } from 'react';
import './Cursor.css';

document.body.style.cursor = 'none';
const NUM_CIRCLES = 20;
const colors = [
    "#1e1e1e", "#2b2b2b", "#3a3a3a", "#484848", "#575757",
    "#666666", "#757575", "#848484", "#949494", "#a3a3a3",
    "#b2b2b2", "#c1c1c1", "#d0d0d0", "#dddddd", "#e8e8e8",
    "#f0f0f0", "#f5f5f5", "#fafafa", "#fefefe", "#ffffff"
];

const Cursor = () => {
    const circlesTarget = useRef([]);
    const coords = useRef({ x: 0, y: 0 });
    const hasMoved = useRef(false);

    useEffect(() => {
        const circles = circlesTarget.current;

        circles.forEach((circle, index) => {
            circle.x = 0;
            circle.y = 0;
            circle.style.backgroundColor = colors[index % colors.length];
        });

        const handleMouseMove = (e) => {
            coords.current.x = e.clientX;
            coords.current.y = e.clientY;

            if (!hasMoved.current) {
                hasMoved.current = true;
                circles.forEach((circle) => {
                    circle.style.opacity = "1";
                    circle.x = e.clientX;
                    circle.y = e.clientY;
                    circle.style.left = `${e.clientX}px`;
                    circle.style.top = `${e.clientY}px`;
                });
                requestAnimationFrame(animate);
            }
        };

        const animate = () => {
            let x = coords.current.x;
            let y = coords.current.y;

            circles.forEach((circle, index) => {
                circle.style.left = `${x}px`;
                circle.style.top = `${y}px`;
                const scale = (NUM_CIRCLES - index) / NUM_CIRCLES;
                circle.style.transform = `translate(-50%, -50%) scale(${scale})`;

                circle.x = x;
                circle.y = y;

                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * 0.3;
                y += (nextCircle.y - y) * 0.3;
            });

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {Array.from({ length: NUM_CIRCLES }).map((_, i) => (
                <div
                    key={i}
                    ref={(element) => (circlesTarget.current[i] = element)}
                    className="circleCursor"
                />
            ))}
        </>
    );
};

export default Cursor;