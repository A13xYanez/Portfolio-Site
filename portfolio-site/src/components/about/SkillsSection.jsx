import React, { useRef } from 'react';
import Image from '../global/images/Image';
import useDragger from '../../hooks/useDragger';


// TODO: Organize skills by languages and frameworks

const SkillsSection = () => {
    const existingPositionsRef = useRef([]);
    useDragger("skills-folder", existingPositionsRef, "skills-window", "open-window", 0.5);
    useDragger("skills-window", existingPositionsRef, "close-skills-window", "close-window", 0.25);
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
                                <Image path="javascript-icon.svg" draggable="false" />
                                <p>JavaScript</p>
                            </div>
                            <div>
                                <Image path="typescript-icon.svg" draggable="false" />
                                <p>TypeScript</p>
                            </div>
                            <div>
                                <Image path="react-icon.svg" draggable="false" />
                                <p>React.js</p>
                            </div>
                            <div>
                                <Image path="nextjs-icon.svg" draggable="false" />
                                <p>Next.js</p>
                            </div>
                            <div>
                                <Image path="express-icon.svg" draggable="false" />
                                <p>Express.js</p>
                            </div>
                            <div>
                                <Image path="tailwindcss-icon.svg" draggable="false" />
                                <p>Tailwind</p>
                            </div>
                        </div>
                        <div className="skills-column">
                            <div>
                                <Image path="cplusplus-icon.svg" draggable="false" />
                                <p>C++</p>
                            </div>
                            <div>
                                <Image path="java-icon.svg" draggable="false" />
                                <p>Java</p>
                            </div>
                            <div>
                                <Image path="spring-icon.svg" draggable="false" />
                                <p>Spring Boot</p>
                            </div>
                            <div>
                                <Image path="amazonwebservices-icon.svg" draggable="false" />
                                <p>AWS</p>
                            </div>
                            <div>
                                <Image path="flutter-icon.svg" draggable="false" />
                                <p>Flutter</p>
                            </div>
                            <div>
                                <Image path="dart-icon.svg" draggable="false" />
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