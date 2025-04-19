import React, { useRef, useState } from 'react';
import Image from '../global/images/Image';
import useDragger from '../../hooks/useDragger';
import { motion } from 'framer-motion';
import { VscTriangleDown } from "react-icons/vsc";

const WorkSection = () => {
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }

        return setSelected(i);
    };

    const existingPositionsRef = useRef([]);
    useDragger("work-folder", existingPositionsRef, "work-window", "open-window", 0.5);
    useDragger("work-window", existingPositionsRef, "close-work-window", "close-window", 0.25);
    return (
        <>
            <div className="folder-container work-experience-folder" id='work-folder'>
                <Image path="windows-95-folder-icon.svg" draggable="false" alt='Folder Icon' className="folder-img" />
                <p>Experience</p>
            </div>
            <div className="work-experience-popup-window-container" id='work-window'>
                <div className="window-title-bar">
                    <div className="title-bar-left">
                        <h2>Work Experience</h2>
                    </div>
                    <div className="title-bar-right">
                        <Image path="windows-95-close-icon.svg" id="close-work-window" alt="Close Button Icon" draggable="false" />
                    </div>
                </div>
                <div className="work-content-wrapper">
                    <div className="work-experience-window-content">
                        {workData.map((item, i) => (
                            <div className="work-experience-item" key={i} onClick={() => toggle(i)}>
                                <div className='work-experience-dropdown'>
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
                                    <p>{item.descriptionLine1}</p>
                                    <p>{item.descriptionLine2}</p>
                                    <p>{item.descriptionLine3}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
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
        altText: "UNiFOODi Logo",
        descriptionLine1: "Developing a Flutter application alongside my team to deliver HLS content streaming to users.",
        descriptionLine2: "The application uses Google Gemini to analyze live stream data and send notifications when specific in-stream events occur.",
        descriptionLine3: "Our team actively conducts debugging sessions while meeting frequently to prepare our application for its upcoming soft launch."
    },
    {
        logo: "vista-logo.jpg",
        company: "VISTA",
        title: "Web Developer",
        timeline: "Jan 2025 - Present",
        status: "in-progress",
        altText: "Valley Institute for Sustainability, Technology, and Agriculture Logo",
        descriptionLine1: "Leading front-end development efforts, improving website performance, accessibility, and mobile usability, which altogether increased session durations by 47%.",
        descriptionLine2: "Redesigning VISTA and its affiliated sites, such as by implementing adaptive design techniques, resulted in a 32% increase in mobile traffic.",
        descriptionLine3: "Used HTML, CSS, and JavaScript in WordPress to create reusable elements that provide smooth integration between all sites."

    },
    {
        logo: "bay-valley-tech-logo.jpg",
        company: "Bay Valley Tech",
        title: "Full-Stack Developer",
        timeline: "Mar 2024 - Aug 2024",
        status: "completed",
        altText: "Bay Valley Tech Logo",
        descriptionLine1: "Built a Python tool that automated API testing, reducing my team's testing time by 40% and allowing us to meet deadlines better.",
        descriptionLine2: "During development, I worked closely with my team through GitHub to share regular updates by creating and reviewing pull requests while maintaining version control practices that enabled smooth, stable deployments.",
        descriptionLine3: "Some projects I was involved in include developing an authenticator to manage and authenticate employees, built on React.js, Express.js, MongoDB, and Docker."
    }
];

export default WorkSection;