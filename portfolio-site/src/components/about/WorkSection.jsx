import React from 'react';
import { useState } from 'react';
import Image from '../global/images/Image';
import useDragger from '../../hooks/useDragger';
import { motion } from 'framer-motion';
import { VscTriangleDown } from "react-icons/vsc";

const WorkSection = () => {
    // function for opening and closing experience description
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }

        return setSelected(i);
    };

    useDragger("work-folder", 700, 420);
    return (
        <>
            <div className="folder-container work-experience-folder" id='work-folder'>
                <Image path="windows-95-folder-icon.svg" draggable="false" alt='Folder Icon' className="folder-img" />
                <p>Experience</p>
            </div>
            <div className="work-experience-popup-window-container">
                <div className="window-title-bar">
                    <div className="title-bar-left">
                        <h2>Work Experience</h2>
                    </div>
                    <div className="title-bar-right">
                        <Image path="windows-95-close-icon.svg" alt="Close Button Icon" draggable="false" onClick={() => setExperienceIsOpen(false)} />
                    </div>
                </div>
                {workData.map((item, i) => (
                    <div className="work-experience-window-content" key={i}>
                        <div className="work-experience-item" onClick={() => toggle(i)}>
                            <div className="work-experience-info">
                                <Image path={item.logo} alt={item.altText} draggable="false" />
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
        </>
    );
};

const workData = [
    {
        logo: "unifoodi-logo.png",
        company: "UNiFOODi",
        title: "Full-Stack Developer",
        timeline: "Feb 2025 - Present",
        status: "in-progress",
        description: "enter descripton here",
        altText: "UNiFOODi Logo"
    },
    {
        logo: "vista-logo.jpg",
        company: "VISTA",
        title: "Web Developer",
        timeline: "Jan 2025 - Present",
        status: "in-progress",
        description: "enter descripton here",
        altText: "Valley Institute for Sustainability, Technology, and Agriculture Logo"
    },
    {
        logo: "bay-valley-tech-logo.jpg",
        company: "Bay Valley Tech",
        title: "Full-Stack Developer",
        timeline: "Mar 2024 - Aug 2024",
        status: "completed",
        description: "enter descripton here",
        altText: "Bay Valley Tech Logo"
    }
];

export default WorkSection;