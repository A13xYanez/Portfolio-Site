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
        descriptionLine1: "I am currently developing a Flutter application with my team that uses HLS to stream content to the user.",
        descriptionLine2: "The app integrates Google Gemini by processing live stream data and triggering notifications based on in-stream events.",
        descriptionLine3: "We are actively debugging and meeting frequently to ensure that our application is ready and runs soothly for its soft launch, which is coming soon."
    },
    {
        logo: "vista-logo.jpg",
        company: "VISTA",
        title: "Web Developer",
        timeline: "Jan 2025 - Present",
        status: "in-progress",
        altText: "Valley Institute for Sustainability, Technology, and Agriculture Logo",
        descriptionLine1: "Led front-end development efforts focused on enhancing web performance, accessibility, and mobile usuability.",
        descriptionLine2: "By modernizing VISTA and its affiliated sites, such as implementing adaptive design techniques, my efforts led to a 32% increase in mobile traffic and a 47% increase in session duration.",
        descriptionLine3: "In addition, I developed reusable WordPress components with HTML, CSS, and JavaScript to ensure seamless integration and consistency across all sites."

    },
    {
        logo: "bay-valley-tech-logo.jpg",
        company: "Bay Valley Tech",
        title: "Full-Stack Developer",
        timeline: "Mar 2024 - Aug 2024",
        status: "completed",
        altText: "Bay Valley Tech Logo",
        descriptionLine1: "Automated API testing by developing a tool in Python that ensured consistent request performance, effectively reducing my team's time spent testing by 40%.",
        descriptionLine2: "Throughout the development process, I collaborated closely with my team, using GitHub to communicate changes regularly, create and review pull requests, and maintain clean version control practices to support smooth, stable deployments.",
        descriptionLine3: "Some projects I was involved in include developing an authenticator to manage and authenticate employees, built on React.js, Express.js, MongoDB, and Docker."
    }
];

export default WorkSection;