import React from 'react';
import { useState } from 'react';
import transition from '../global/transitions/Transition'
import Image from '../global/images/Image';
import BioSection from './BioSection';
import WorkSection from './WorkSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import './About.css'

//TODO:
//Change the p tags to textarea so that the windows become resizeable.
//Set a minimun and max width and height so that they cannot be too small or big.

const About = () => {
    const [infoIsOpen, setInfoIsOpen] = useState(true);
    return (
        <div className="about-container">
            <BioSection />
            <WorkSection />
            <EducationSection />
            <SkillsSection />
            {infoIsOpen && 
                <div className="info-popup-window-container">
                    <div className="window-title-bar">
                        <div className="title-bar-left">
                            <h2>Help</h2>
                        </div>
                        <div className="title-bar-right">
                            <Image path="windows-95-close-icon.svg" alt="Close Button Icon" draggable="false" onClick={() => setInfoIsOpen(false)} />
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
            }
        </div>
    )
};

export default transition(About);