import React from 'react';
import { useEffect, useRef, useState } from 'react';
import transition from '../global/transitions/Transition'
import folderIcon from '../../assets/windows-95-folder.svg';
import './About.css'

import msgInfo from '../../assets/msg_information.svg';
import closeIcon from '../../assets/close-icon.svg';

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

    const [infoIsOpen, setInfoIsOpen] = useState(true);
    const [aboutIsOpen, setAboutIsOpen] = useState(false);
    return (
        <div ref={container} className="about-container">
            <div className="folder-container about-me-folder" ref={folder} onClick={() => setAboutIsOpen(true)}>
                <img src={folderIcon} draggable="false" alt='Folder Icon' className="folder-img" />
                <p>About Me</p>
            </div>
            <div className="folder-container work-experience-folder">
                <img src={folderIcon} draggable="false" alt='Folder Icon' className="folder-img" />
                <p>Experience</p>
            </div>
            <div className="folder-container education-folder">
                <img src={folderIcon} draggable="false" alt='Folder Icon' className="folder-img" />
                <p>Education</p>
            </div>
            <div className="folder-container skills-folder">
                <img src={folderIcon} draggable="false" alt='Folder Icon' className="folder-img" />
                <p>Skills</p>
            </div>

            {infoIsOpen && 
                <div className="info-popup-window-container">
                    <div className="window-title-bar">
                        <div className="title-bar-left">
                            <h2>Help</h2>
                        </div>
                        <div className="title-bar-right">
                            <img src={closeIcon} alt="Close Button Icon" draggable="false" onClick={() => setInfoIsOpen(false)} />
                        </div>
                    </div>
                    <div className="window-content">
                        <div className="window-header">
                            <img src={msgInfo} draggable="false" alt="Information Icon" />
                            <h2>Read me:</h2>
                        </div>
                        <p>To access the information about me, click or tap on the folders.</p>
                        <br/>
                        <p>Please note, you can move all the items on this page by dragging them with your mouse.</p>
                        <p>This feature is disabled on mobile devices for a better user experience.</p>
                    </div>
                </div>
            }

            {aboutIsOpen &&
                <div className="about-popup-window-container">
                    <div className="window-title-bar">
                        <div className="title-bar-left">
                            <h2>About Me</h2>
                        </div>
                        <div className="title-bar-right">
                            <img src={closeIcon} alt="Close Button Icon" draggable="false" onClick={() => setAboutIsOpen(false)} />
                        </div>
                    </div>
                    <div className="about-window-content">
                        <p>About me stuff</p>
                    </div>
                </div>
            }
        </div>
    )
};

export default transition(About);