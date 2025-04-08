import React from 'react';
import { useEffect, useRef } from 'react';
import transition from '../global/transitions/Transition'
import './About.css'

import fold from '../../assets/Folder.svg';

const About = () => {
    const container = useRef(null);
    const folder = useRef(null);
    const isClicked = useRef(false);
    const coords = useRef({
        startX: 330,
        startY: 340,
        lastX: 330,
        lastY: 340
    });

    useEffect(() => {
        // reference the elements to drag and its container 
        if (!container.current || !folder.current) return;
        const folderTarget = folder.current;
        const containerTarget = container.current;

        // event listener function
        const onMouseDown = (e) => {
            isClicked.current = true;
            folderTarget.style.cursor = "grab";
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        };

        const onMouseUp = (e) => {
            isClicked.current = false;
            folderTarget.style.cursor = "pointer";
            coords.current.lastX = folderTarget.offsetLeft;
            coords.current.lastY = folderTarget.offsetTop;
        };

        const onMouseMove = (e) => {
            if (!isClicked.current) return;

            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;

            folderTarget.style.cursor = "grabbing";
            folderTarget.style.top = `${nextY}px`;
            folderTarget.style.left = `${nextX }px`;
        }

        // attatch event listeners
        folderTarget.addEventListener('mousedown', onMouseDown);
        folderTarget.addEventListener('mouseup', onMouseUp);
        containerTarget.addEventListener('mousemove', onMouseMove);
        containerTarget.addEventListener('mouseleave', onMouseUp);

        // remove event listeners
        const cleanUp = () => {
            folderTarget.removeEventListener('mousedown', onMouseDown);
            folderTarget.removeEventListener('mouseup', onMouseUp);
            containerTarget.removeEventListener('mousemove', onMouseMove);
            containerTarget.removeEventListener('mouseleave', onMouseUp);
        };

        return cleanUp;
    }, []);
    return (
        <div ref={container} className="about-container">
            <div className="folder-container about-me-folder" ref={folder}>
                <img src={fold} draggable="false" alt='Folder Icon' className="folder-img" />
                <p>About Me</p>
            </div>
            <div className="folder-container work-experience-folder">
                <img src={fold} draggable="false" alt='Folder Icon' className="folder-img" />
                <p>Experience</p>
            </div>
            <div className="folder-container education-folder">
                <img src={fold} draggable="false" alt='Folder Icon' className="folder-img" />
                <p>Education</p>
            </div>
            <div className="folder-container skills-folder">
                <img src={fold} draggable="false" alt='Folder Icon' className="folder-img" />
                <p>Skills</p>
            </div>
        </div>
    )
};

export default transition(About);