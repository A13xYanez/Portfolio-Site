import React, { useEffect, useRef, useState } from 'react';
import './Cursor.css';

const NUM_CIRCLES = 20;
const colors = [
    "#1a001f", "#260033", "#33004d", "#400066", "#4d0080",
    "#5c1a91", "#6a33a3", "#7a4db3", "#8a66c2", "#9b80d1",
    "#ac99e0", "#bca3e6", "#cdb3ec", "#ddc3f2", "#eddbf8",
    "#f4e6fb", "#f9effd", "#fcf7fe", "#fefbff", "#ffffff"
];

const Cursor = () => {
    const circlesTarget = useRef([]);
    const coords = useRef({ x: 0, y: 0 });
    const hasMoved = useRef(false);

    const [label, setLabel] = useState('');
    const [labelPos, setLabelPos] = useState({ x: 0, y: 0 });

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
            setLabelPos({ x: e.clientX + 12, y: e.clientY + 12 });

            const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
            const labelText = hoveredElement?.getAttribute('data-cursor-label') || '';
            setLabel(labelText);

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

            {label && (
                <div
                    className="cursor-label"
                    style={{
                        left: `${labelPos.x}px`,
                        top: `${labelPos.y + 15}px`
                    }}
                >
                    {label}
                </div>
            )}
        </>
    );
};

export default Cursor;
