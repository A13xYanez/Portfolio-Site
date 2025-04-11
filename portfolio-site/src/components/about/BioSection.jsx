import React, { useRef } from 'react';
import Image from '../global/images/Image';
import useDragger from '../../hooks/useDragger';

const BioSection = () => {
    const existingPositionsRef = useRef([]);
    useDragger("about-folder", existingPositionsRef, "about-window", "open-window");
    useDragger("about-window", existingPositionsRef, "close-about-window", "close-window");
    return (
        <>
            <div className="folder-container about-me-folder" id='about-folder'>
                <Image path="windows-95-folder-icon.svg" draggable="false" alt='Folder Icon' className="folder-img" />
                <p>About Me</p>
            </div>
            <div className="about-popup-window-container" id='about-window'>
                <div className="window-title-bar">
                    <div className="title-bar-left">
                        <h2>About Me</h2>
                    </div>
                    <div className="title-bar-right">
                        <Image path="windows-95-close-icon.svg" id="close-about-window" alt="Close Button Icon" draggable="false" />
                    </div>
                </div>
                <div className="about-window-content">
                    <p>About me stuff</p>
                </div>
            </div>
        </>
    );
};

export default BioSection;