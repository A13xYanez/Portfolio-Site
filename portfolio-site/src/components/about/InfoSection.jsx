import React, { useRef } from 'react';
import Image from '../global/images/Image';
import useDragger from '../../hooks/useDragger';

const InfoSection = () => {
    const existingPositionsRef = useRef([]);
    useDragger("info-window", existingPositionsRef, "close-info-window", "close-window", 0, true);
    return (
        <>
            <div className="info-popup-window-container" id='info-window'>
                <div className="window-title-bar">
                    <div className="title-bar-left">
                        <h2>Help</h2>
                    </div>
                    <div className="title-bar-right">
                        <Image path="windows-95-close-icon.svg" id="close-info-window" alt="Close Button Icon" draggable="false" />
                    </div>
                </div>
                <div className="info-content-wrapper">
                    <div className="info-window-content">
                        <div className="info-window-header">
                            <Image path="windows-95-information-icon.svg" draggable="false" alt="Information Icon" />
                            <h2>Read me:</h2>
                        </div>
                        <p>To access the information about me, <strong>double click</strong> on the folders.</p>
                        <br/>
                        <p>Please note, you can move all the items on this page by dragging them with your mouse or finger if on a touch screen device.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoSection;