import React, { useRef } from 'react';
import Image from '../global/images/Image';
import useDragger from '../../hooks/useDragger';

const SkillsSection = () => {
    const existingPositionsRef = useRef([]);
    useDragger("skills-folder", existingPositionsRef, "skills-window", "open-window");
    useDragger("skills-window", existingPositionsRef, "close-skills-window", "close-window");
    return (
        <>
            <div className="folder-container skills-folder" id='skills-folder'>
                <Image path="windows-95-folder-icon.svg" draggable="false" alt='Folder Icon' className="folder-img" />
                <p>Skills</p>
            </div>
            <div className="skills-popup-window-container" id='skills-window'>
                <div className="window-title-bar">
                    <div className="title-bar-left">
                        <h2>Skills</h2>
                    </div>
                    <div className="title-bar-right">
                        <Image path="windows-95-close-icon.svg" id="close-skills-window" alt="Close Button Icon" draggable="false" />
                    </div>
                </div>
                <div className="skills-content-wrapper">
                    <div className="skills-window-content">
                        <div className="skills-column">
                            <div>
                                <Image path="react-icon.svg" />
                                <p>JavaScript</p>
                            </div>
                            <div>
                                <Image path="react-icon.svg" />
                                <p>TypeScript</p>
                            </div>
                            <div>
                                <Image path="react-icon.svg" />
                                <p>React.js</p>
                            </div>
                            <div>
                                <Image path="react-icon.svg" />
                                <p>Next.js</p>
                            </div>
                            <div>
                                <Image path="react-icon.svg" />
                                <p>Express.js</p>
                            </div>
                            <div>
                                <Image path="react-icon.svg" />
                                <p>Tailwind</p>
                            </div>
                        </div>
                        <div className="skills-column">
                            <div>
                                <Image path="react-icon.svg" />
                                <p>C++</p>
                            </div>
                            <div>
                                <Image path="react-icon.svg" />
                                <p>Java</p>
                            </div>
                            <div>
                                <Image path="react-icon.svg" />
                                <p>Spring Boot</p>
                            </div>
                            <div>
                                <Image path="react-icon.svg" />
                                <p>AWS</p>
                            </div>
                            <div>
                                <Image path="react-icon.svg" />
                                <p>Flutter</p>
                            </div>
                            <div>
                                <Image path="react-icon.svg" />
                                <p>Dart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsSection;