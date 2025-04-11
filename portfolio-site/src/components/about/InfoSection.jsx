import React from 'react';
import Image from '../global/images/Image';
import useDragger from '../../hooks/useDragger';

const InfoSection = () => {
    useDragger("info-window", 500, 300, "close-info-window", "close-window");
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
                <div className="window-content">
                    <div className="window-header">
                        <Image path="windows-95-information-icon.svg" draggable="false" alt="Information Icon" />
                        <h2>Read me:</h2>
                    </div>
                    <p>To access the information about me, <strong>double click</strong> on the folders.</p>
                    <br/>
                    <p>Please note, you can move all the items on this page by dragging them with your mouse.</p>
                    <p>This feature is disabled on mobile devices for a better user experience.</p>
                </div>
            </div>
        </>
    );
};

export default InfoSection;