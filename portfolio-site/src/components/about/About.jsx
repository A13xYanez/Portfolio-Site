import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useDragger from '../../hooks/useDragger';
import transition from '../global/transitions/Transition'
import folderIcon from '../../assets/windows-95-folder.svg';
import './About.css'

import msgInfo from '../../assets/msg_information.svg';
import closeIcon from '../../assets/close-icon.svg';
import bayvalleytech from '../../assets/bay_valley_tech_logo.jpg';
import vista from '../../assets/valley_institute_for_sustainability_technology_agriculture_logo.jpg';
import unifoodi from '../../assets/unifoodi_logo.png';
import { VscTriangleDown } from "react-icons/vsc";
import ucmlogo from '../../assets/UCMLogo.png';
import googledevelopergroup from '../../assets/google_developer_group_logo.png';
import acm from '../../assets/acm_logo.png';
import hackmerced from '../../assets/hack_merced.png';
import reacticon from '../../assets/react.svg';

//TODO:
//Change the p tags to textarea so that the windows become resizeable.
//Set a minimun and max width and height so that they cannot be too small or big.

const About = () => {
    const [infoIsOpen, setInfoIsOpen] = useState(true);
    const [experienceIsOpen, setExperienceIsOpen] = useState(false);
    const [educationIsOpen, setEducationIsOpen] = useState(false);
    const [skillsIsOpen, setSkillsIsOpen] = useState(false);

    const [isDegreeTabOpen, setIsDegreeTabOpen] = useState(true);
    const [isCoursesTabOpen, setIsCoursesTabOpen] = useState(false);
    const [isClubsTabOpen, setIsClubsTabOpen] = useState(false);

    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }

        return setSelected(i);
    };

    useDragger("about-folder", 330, 340, "about-window");
    useDragger("work-folder", 700, 420);

    return (
        <div className="about-container">
            <div className="folder-container about-me-folder" id='about-folder'>
                <img src={folderIcon} draggable="false" alt='Folder Icon' className="folder-img" />
                <p>About Me</p>
            </div>
            <div className="folder-container work-experience-folder" id='work-folder'>
                <img src={folderIcon} draggable="false" alt='Folder Icon' className="folder-img" />
                <p>Experience</p>
            </div>
            <div className="folder-container education-folder" onClick={() => setEducationIsOpen(true)}>
                <img src={folderIcon} draggable="false" alt='Folder Icon' className="folder-img" />
                <p>Education</p>
            </div>
            <div className="folder-container skills-folder" onClick={() => setSkillsIsOpen(true)}>
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
                        <p>To access the information about me, <strong>double click</strong> on the folders.</p>
                        <br/>
                        <p>Please note, you can move all the items on this page by dragging them with your mouse.</p>
                        <p>This feature is disabled on mobile devices for a better user experience.</p>
                    </div>
                </div>
            }


                <div className="about-popup-window-container" id='about-window'>
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
            

            {experienceIsOpen &&
                <div className="work-experience-popup-window-container">
                        <div className="window-title-bar">
                            <div className="title-bar-left">
                                <h2>Work Experience</h2>
                            </div>
                            <div className="title-bar-right">
                                <img src={closeIcon} alt="Close Button Icon" draggable="false" onClick={() => setExperienceIsOpen(false)} />
                            </div>
                        </div>
                        {workData.map((item, i) => (
                            <div className="work-experience-window-content" key={i}>
                                <div className="work-experience-item" onClick={() => toggle(i)}>
                                    <div className="work-experience-info">
                                        <img src={item.logo} />
                                        <div className="group-timeline-position">
                                            <div className="work-experience-position">
                                                <p>{item.company}</p>
                                                <p>{item.title}</p>
                                            </div>
                                            <div className="work-experience-timeline">
                                                <div className={`flicker-light ${item.status}`}>
                                                    <div />
                                                </div>
                                                <p>{item.timeline}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <motion.div initial={{ rotate: 0}} animate={{ rotate: selected == i ? -180 : 0, transition: { duration: 0.25 }}}>
                                        <VscTriangleDown className='expand-down-icon' />
                                    </motion.div>
                                </div>
                                <div className={selected == i ? "work-experience-description show-description" : "work-experience-description"}>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            }

            {educationIsOpen &&
                <div className="education-popup-window-container">
                    <div className="window-title-bar">
                        <div className="title-bar-left">
                            <h2>Education</h2>
                        </div>
                        <div className="title-bar-right">
                            <img src={closeIcon} alt="Close Button Icon" draggable="false" onClick={() => setEducationIsOpen(false)} />
                        </div>
                    </div>
                    <div className="education-content-wrapper">
                        <div className="education-section-tabs">
                            <div className="education-tab" onClick={() => {setIsDegreeTabOpen(true); setIsCoursesTabOpen(false); setIsClubsTabOpen(false);}}>
                                <p>Degree</p>
                            </div>
                            <div className="education-tab"  onClick={() => {setIsDegreeTabOpen(false); setIsCoursesTabOpen(true); setIsClubsTabOpen(false);}}>
                                <p>Courses</p>
                            </div>
                            <div className="education-tab" onClick={() => {setIsDegreeTabOpen(false); setIsCoursesTabOpen(false); setIsClubsTabOpen(true);}}>
                                <p>Clubs</p>
                            </div>
                        </div>
                        <div className="education-window-content">
                            {isDegreeTabOpen &&
                                <div className="education-degree-tab">
                                    <div className="university-logo">
                                        <img src={ucmlogo} draggable="false" alt="The University of California, Merced Logo" />
                                    </div>
                                    <div className="univeristy-details">
                                        <p className='university-details-section-title'>University name:</p>
                                        <p>The University of California, Merced</p>
                                        <br/>
                                        <br/>
                                        <p className='university-details-section-title'>Degree:</p>
                                        <p>Computer Science & Engineering, Bachelor's of Science</p>
                                        <br />
                                        <br />
                                        <p className='university-details-section-title'>Graduation Date:</p>
                                        <p>Expected 2026</p>
                                    </div>
                                </div>
                            }

                            {isCoursesTabOpen &&
                                <div className="education-courses-tab">
                                    <h3>Completed Courses:</h3>
                                    <ul className='eduction-course-list'>
                                        <li>Introduction to Programming</li>
                                        <li>Advanced Programming</li>
                                        <li>Data Structures</li>
                                        <li>Computer Organization and Assembly Language</li>
                                        <li>Algorithm Design and Analysis</li>
                                    </ul>
                                </div>
                            }

                            {isClubsTabOpen &&
                                <div className="education-clubs-tab">
                                    <div className="education-clubs-tab">
                                        {clubData.map((item, i) => (
                                            <div className="club-item" key={i}>
                                                <div className="club-logo">
                                                    <img src={item.logo} draggable="false" alt="Google Developer Group's Logo" />
                                                </div>
                                                <div className="univeristy-details">
                                                    <p className='university-details-section-title'>Club Name:</p>
                                                    <p>{item.club}</p>
                                                    <br/>
                                                    <br/>
                                                    <p className='university-details-section-title'>Description:</p>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }

            {skillsIsOpen &&
                <div className="skills-popup-window-container">
                    <div className="window-title-bar">
                        <div className="title-bar-left">
                            <h2>Skills</h2>
                        </div>
                        <div className="title-bar-right">
                            <img src={closeIcon} alt="Close Button Icon" draggable="false" onClick={() => setSkillsIsOpen(false)} />
                        </div>
                    </div>
                    <div className="skills-window-content">
                        <div className="skills-column">
                            <div>
                                <img src={reacticon} alt="" />
                                <p>JavaScript</p>
                            </div>
                            <div>
                                <img src={reacticon} alt="" />
                                <p>TypeScript</p>
                            </div>
                            <div>
                                <img src={reacticon} alt="" />
                                <p>React.js</p>
                            </div>
                            <div>
                                <img src={reacticon} alt="" />
                                <p>Next.js</p>
                            </div>
                            <div>
                                <img src={reacticon} alt="" />
                                <p>Express.js</p>
                            </div>
                            <div>
                                <img src={reacticon} alt="" />
                                <p>Tailwind</p>
                            </div>
                        </div>
                        <div className="skills-column">
                            <div>
                                <img src={reacticon} alt="" />
                                <p>C++</p>
                            </div>
                            <div>
                                <img src={reacticon} alt="" />
                                <p>Java</p>
                            </div>
                            <div>
                                <img src={reacticon} alt="" />
                                <p>Spring Boot</p>
                            </div>
                            <div>
                                <img src={reacticon} alt="" />
                                <p>AWS</p>
                            </div>
                            <div>
                                <img src={reacticon} alt="" />
                                <p>Flutter</p>
                            </div>
                            <div>
                                <img src={reacticon} alt="" />
                                <p>Dart</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

const workData = [
    {
        logo: unifoodi,
        company: "UNiFoodi",
        title: "Full-Stack Developer",
        timeline: "Feb 2025 - Present",
        status: "in-progress",
        description: "enter descripton here"
    },
    {
        logo: vista,
        company: "VISTA",
        title: "Web Developer",
        timeline: "Jan 2025 - Present",
        status: "in-progress",
        description: "enter descripton here"
    },
    {
        logo: bayvalleytech,
        company: "Bay Valley Tech",
        title: "Full-Stack Developer",
        timeline: "Mar 2024 - Aug 2024",
        status: "completed",
        description: "enter descripton here"
    }
];

const clubData = [
    {
        logo: googledevelopergroup,
        club: "Google Developer Group",
        description: "description here"
    },
    {
        logo: acm,
        club: "Association for Computing Machinery",
        description: "description here"
    },
    {
        logo: hackmerced,
        club: "Hack Merced",
        description: "description here"
    }
];

export default transition(About);